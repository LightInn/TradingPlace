'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PocketBase from 'pocketbase'

const pb = new PocketBase('https://tradingplace-api.lightin.io')

export default function Page() {
	const router = useRouter()
	const [email, setEmail] = useState('breval.lefloch@gmail.com')
	const [password, setPassword] = useState('12345678')

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (email !== undefined && password !== undefined) {
			const authData = await pb
				.collection('users')
				.authWithPassword(email.toString(), password.toString())
				.then(response => {
					console.log(document.cookie)
					console.log(response)
					console.log(pb.authStore.model)

					document.cookie = pb.authStore.exportToCookie(
						{
							httpOnly: false,
							domain: 'localhost',
							path: '/',
							sameSite: 'lax',
							secure: false,
						},
						'pb_auth'
					)
					console.log(document.cookie)

					router.push('/home')
				})

			// after the above you can also access the auth data from the authStore
			console.log(pb.authStore.isValid)
			console.log(pb.authStore.token)
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

				<button className="rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700">
					Submit
				</button>
			</form>
		</div>
	)
}
