import Link from "next/link";
import React from "react";
import {cookies} from "next/headers";
import {pocketbase} from "@/lib/pocketbase";


function getPBSession() {
    const nextCookies = cookies();
    const authCookie = nextCookies.get("pb_auth");
    if (!authCookie) return null;
    return pocketbase.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`);
}


export default async function Page() {


    const r = await getPBSession()


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                Main page
            </div>
            <div className="bg-blue-600">
                <Link href={"/auth/profile"}>Profile</Link>
                <Link href={"/home/mine"}>Mine</Link>
            </div>
        </div>

    )


}