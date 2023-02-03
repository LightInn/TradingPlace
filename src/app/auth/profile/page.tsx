'use client';

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pockettest.lightin.io');


async function getUser(id: string) {
    return await pb.collection('users').getOne(id);
}


export default async function Page() {


    const router = useRouter()
    const [profile, setProfile] = useState({
        username: undefined
    })


    const logout = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        // "logout" the last authenticated account
        pb.authStore.clear();
    }


    useEffect(() => {


        async () => {


            // @ts-ignore
            let user = await getUser(pb.authStore.model.id);
            console.log(user);


            // @ts-ignore
            if (profile !== user) {

                // @ts-ignore
                setProfile(user);
            }


        }


    }, [profile])


    if (profile === undefined) {

        return (

            <h1>
                not connected
            </h1>
        )


    } else {
        return (
            <div className="flex items-center justify-center h-screen">


                <h1> {profile.username} </h1>


                <button onClick={logout}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                    Logout
                </button>

            </div>
        )
    }
}