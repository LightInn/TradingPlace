import Link from "next/link";
import React from "react";

export default function Page() {


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                Main page
            </div>
            <div className="bg-blue-600">
                <Link href={"/auth/profile"}>Profile</Link>
            </div>
        </div>

    )


}