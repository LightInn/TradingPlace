import PocketBase from 'pocketbase'
import * as process from 'process'

const pb: PocketBase = new PocketBase(
	typeof document !== 'undefined'
		? 'http://localhost:8090'
		: 'http://127.0.0.1:8090'
) //process.env.API_URL

if (typeof document !== 'undefined') {
	pb.authStore.loadFromCookie(document.cookie)

	pb.authStore.onChange(() => {
		document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
	})
}

console.log(process.env.API_URL)

pb.autoCancellation(false)

export { pb }
