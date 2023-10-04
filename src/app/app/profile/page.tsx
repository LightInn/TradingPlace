import Link from "next/link";

export const revalidate = 0;

import {cookies} from "next/headers";
import {pb} from "@/lib/pocketbase";
import LogoutBtn from "@/app/app/profile/logout-btn";
import ProfileView from "@/app/app/profile/profile-view";
import {Suspense} from "react";


const getUser = async (id: string) => {

    const nextCookies = cookies();
    const authCookie = nextCookies.get("pb_auth");
    if (!authCookie) return null;
    await pb.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`);
    return await pb.collection('users').getOne(id).catch(
        (error) => {
            console.log(error);
        }
    );
    // todo : add error handling
}


export default async function Page() {

    const r = await getUser(pb.authStore.model?.id as string)


    return (
        <div className="flex flex-col  items-center justify-center h-screen">

            <Suspense>
                <ProfileView data={r}/>
            </Suspense>

            <div className={"m-8 w-full flex justify-center items-center "}>

                <Link href={"/home"}
                      className="bg-blue-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full mx-4">Back</Link>

                <LogoutBtn/>
            </div>


        </div>
    )

}