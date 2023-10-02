'use client';
import PocketBase from 'pocketbase';
import {router} from "next/client";
import {useRouter} from "next/navigation";
import {element} from "prop-types";
import {pocketbase} from "@/lib/pocketbase";


export default function LogoutBtn() {

    const router = useRouter()


    const logout = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        // "logout" the last authenticated account
        pocketbase.authStore.clear();
        router.push("/");
    }


    return (


        <button onClick={logout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
            Logout
        </button>


    );


}