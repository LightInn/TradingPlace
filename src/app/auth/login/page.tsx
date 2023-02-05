'use client';
import {useRouter} from "next/navigation";
import {useState} from "react";
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pockettest.lightin.io');

export default function Page() {

    const router = useRouter()
    const [email, setEmail] = useState("breval.lefloch@gmail.com")
    const [password, setPassword] = useState("12345678")

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (
            email !== undefined
            && password !== undefined
        ) {

            const authData = await pb.collection('users').authWithPassword(
                email.toString(),
                password.toString(),
            ).then((response) => {
                    console.log(document.cookie)
                    console.log(response);
                    console.log(pb.authStore.model);


                    document.cookie = pb.authStore.exportToCookie({
                            httpOnly: false,
                            domain: 'localhost',
                            path: '/',
                            sameSite: 'lax',
                            secure: false,
                        },
                        "pb_auth"
                    );
                    console.log(document.cookie)

                    router.push("/home");


                }
            );


            // after the above you can also access the auth data from the authStore
            console.log(pb.authStore.isValid);
            console.log(pb.authStore.token);


        }

    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} method="post" className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-medium mb-4">Register</h2>


                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-2">Email :</label>
                    <input onChange={e => setEmail(e.target.value)}
                           type="text"
                           name="email"
                           value={email.toString()}
                           required
                           className="border border-gray-400 p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block font-medium mb-2">Password :</label>
                    <input onChange={e => setPassword(e.target.value)}
                           type="password"
                           name="password"
                           value={password.toString()}
                           required
                           className="border border-gray-400 p-2 w-full"
                    />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                    Submit
                </button>
            </form>
        </div>
    )
}
