import type {User} from '@/interfaces/User'
import {pocketbase} from '@/lib/pocketbase'
import {RequestCookie} from 'next/dist/compiled/@edge-runtime/cookies'

async function getUserFromCookie(authCookie: RequestCookie | undefined) {
    if (!authCookie) return null

    pocketbase.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`)
    const user = pocketbase.authStore.model
    return user as unknown as User
}

export {getUserFromCookie}
