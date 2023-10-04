import PocketBase from 'pocketbase'
import * as process from "process";

const pb: PocketBase = new PocketBase("http://localhost:8090") //process.env.API_URL
console.log(process.env.API_URL)

if (typeof document !== 'undefined') {
    pb.authStore.loadFromCookie(document.cookie)

    pb.authStore.onChange(() => {
        document.cookie = pb.authStore.exportToCookie({httpOnly: false})
    })
}

pb.autoCancellation(false)

export {pb}
