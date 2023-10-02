import {cookies} from "next/headers";
import {pocketbase} from "@/lib/pocketbase";

export const revalidate = 0;


import LogoutBtn from "@/app/auth/profile/logout-btn";
import ProfileView from "@/app/auth/profile/profile-view";
import {Suspense} from "react";





const getUser = async (id: string) => {

    const nextCookies = cookies();

    const authCookie = nextCookies.get("pb_auth");

    console.log("auth cookie : " + authCookie)


    if (!authCookie) return null;

    console.log("pass null")

    console.log(pocketbase.authStore.model)


    await pocketbase.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`);

    console.log(pocketbase.authStore.model)

    return await pocketbase.collection('users').getOne(id).catch(
        (error) => {
            console.log(error);
        }
    );
    // todo : add error handling
}


export default async function Page() {

    const r = await getUser(pocketbase.authStore.model?.id as string)


    return (
        <div className="flex flex-col  items-center justify-center h-screen">

            <Suspense>
                <ProfileView data={r}/>
            </Suspense>


            <LogoutBtn/>
        </div>
    )

}