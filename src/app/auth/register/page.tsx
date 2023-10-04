'use client'

import {useRouter} from 'next/navigation'
import {useState} from 'react'
import {pb} from '@/lib/pocketbase'

export default function Register() {
    const router = useRouter()

    const [email, setEmail] = useState('breval.lefloch@gmail.com')
    const [name, setName] = useState('breval')
    const [password, setPassword] = useState('12345678')
    const [passwordConfirm, setPasswordConfirm] = useState('12345678')

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        if (
            email !== undefined &&
            name !== undefined &&
            password !== undefined &&
            passwordConfirm !== undefined
        ) {
            // example create data
            const data = {
                username: name.toString(),
                email: email.toString(),
                emailVisibility: true,
                password: password.toString(),
                passwordConfirm: passwordConfirm.toString(),
                name: 'test',
            }

            console.log(pb)

            const record = await pb
                .collection('users')
                .create(data)
                .then(response => {
                    console.log(response)

                    router.push('/')
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <form
                onSubmit={handleSubmit}
                method="post"
                className="rounded-lg bg-white p-6 shadow-md"
            >
                <h2 className="mb-4 text-lg font-medium">Register</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block font-medium">
                        Username :
                    </label>
                    <input
                        onChange={e => setName(e.target.value)}
                        type="name"
                        name="name"
                        value={name.toString()}
                        required
                        // @ts-ignore
                        minLength="3"
                        // @ts-ignore
                        maxLength="25"
                        className="w-full border border-gray-400 p-2"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block font-medium">
                        Email :
                    </label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="text"
                        name="email"
                        value={email.toString()}
                        required
                        className="w-full border border-gray-400 p-2"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="mb-2 block font-medium">
                        Password :
                    </label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        value={password.toString()}
                        required
                        className="w-full border border-gray-400 p-2"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="passwordConfirm" className="mb-2 block font-medium">
                        Confirm Password :
                    </label>
                    <input
                        onChange={e => setPasswordConfirm(e.target.value)}
                        type="password"
                        name="passwordConfirm"
                        value={passwordConfirm.toString()}
                        required
                        className="w-full border border-gray-400 p-2"
                    />
                </div>

                <button className="rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    )
}
