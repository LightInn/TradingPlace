import type { User } from '@/interfaces/User'


import { cookies } from 'next/headers'

import { pocketbase } from '@/lib/pocketbase'
import { RequestCookies } from 'next/dist/server/web/spec-extension/cookies'

/**
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns User or null
 * @author Arif "poltang" Muslax
 * @see {@link https://github.com/vvo/iron-session/issues/560#issuecomment-1324598048}
 */
function getUserFromCookie(){
	const cookieStore = cookies()
	const authCookie = cookieStore.get('pb_auth')

	if (!authCookie) return null

	pocketbase.authStore.loadFromCookie(`${authCookie.name}=${authCookie.value}`)
	const user = pocketbase.authStore.model

	return user as unknown as User
}

export { getUserFromCookie }
