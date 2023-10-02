import PocketBase from "pocketbase";

// import { env } from "@/lib/env";

const pocketbase = new PocketBase('https://tradingplace-api.lightin.io');


if (typeof document !== "undefined") {
    pocketbase.authStore.loadFromCookie(document.cookie);

    pocketbase.authStore.onChange(() => {
        document.cookie = pocketbase.authStore.exportToCookie({ httpOnly: false });
    });
}

pocketbase.autoCancellation(false)


export { pocketbase };