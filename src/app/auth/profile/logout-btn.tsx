'use client'
import PocketBase from 'pocketbase'
import { router } from 'next/client'
import { useRouter } from 'next/navigation'
import { element } from 'prop-types'
import { pocketbase } from '@/lib/pocketbase'

export default function LogoutBtn() {
	const router = useRouter()

	const logout = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		// "logout" the last authenticated account
		pocketbase.authStore.clear()
		router.push('/')
	}

	return (
		<button
			onClick={logout}
			className="rounded-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700"
		>
			Logout
		</button>
	)
}
