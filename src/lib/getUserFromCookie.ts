import type { User } from '@/interfaces/User'
import { pb } from '@/lib/pocketbase'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

async function getUserFromCookie(authCookie: RequestCookie | undefined) {
	if (!authCookie) return null

	pb.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`)
	const user = pb.authStore.model
	return user as unknown as User
}

export { getUserFromCookie }
