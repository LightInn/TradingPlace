'use client'
import PocketBase from 'pocketbase'
import { router } from 'next/client'
import { useRouter } from 'next/navigation'
import { element } from 'prop-types'
import { pb } from '@/lib/pocketbase'

export default function LogoutBtn() {
	const router = useRouter()

	const logout = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		// "logout" the last authenticated account
		pb.authStore.clear()
		router.push('/')
	}

	return (
		<button
			onClick={logout}
			className="rounded-full bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-700"
		>
			Logout
		</button>
	)
}
