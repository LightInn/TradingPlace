import { useRouter } from "next/router";
import {useState} from "react";




export default function Register() {


    const router = useRouter()
    const [route, setRoute] = useState()
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        router.push("someBasePath/" + route)
    }


    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} method="post" className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-medium mb-4">Register</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-2">Username :</label>
                    <input
                        type="name"
                        name="name"
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
                    <input
                        type="text"
                        name="email"
                        required
                        className="border border-gray-400 p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block font-medium mb-2">Password :</label>
                    <input
                        type="password"
                        name="password"
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
