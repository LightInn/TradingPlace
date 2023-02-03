'use client';

import {useRouter} from "next/navigation";
import {useState} from "react";
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pockettest.lightin.io');

export default function Register() {


    const router = useRouter()


    const [email, setEmail] = useState("breval.lefloch@gmail.com")
    const [name, setName] = useState("breval")
    const [password, setPassword] = useState("123456")
    const [passwordConfirm, setPasswordConfirm] = useState("123456")


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()


        if (
            email !== undefined
            && name !== undefined
            && password !== undefined
            && passwordConfirm !== undefined
        ) {


            // example create data
            const data = {
                "username": name.toString(),
                "email": email.toString(),
                "emailVisibility": true,
                "password": password.toString(),
                "passwordConfirm": passwordConfirm.toString(),
                "name": "test"
            };

            const record = await pb.collection('users').create(data).then((response) => {


                    console.log(response);

                    router.push("/");


                }
            ).catch((error) => {
                console.log(error);
            });


        }

    }


    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} method="post" className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-medium mb-4">Register</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-2">Username :</label>
                    <input onChange={e => setName(e.target.value)}
                           type="name"
                           name="name"
                           value={name.toString()}
                           required
                        // @ts-ignore
                           minLength="3"
                        // @ts-ignore
                           maxLength="25"
                           className="border border-gray-400 p-2 w-full"
                    />
                </div>

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

                <div className="mb-4">
                    <label htmlFor="passwordConfirm" className="block font-medium mb-2">Confirm Password :</label>
                    <input onChange={e => setPasswordConfirm(e.target.value)}
                           type="password"
                           name="passwordConfirm"
                           value={passwordConfirm.toString()}
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
