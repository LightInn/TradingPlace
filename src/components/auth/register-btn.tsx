import {useSession, signIn, signOut} from "next-auth/react"

export default function RegisterBtn() {
    const {data: session} = useSession()
    if (session) {
        // @ts-ignore
        return (<> Signed in as {session.user.email} <br/>
            <button onClick={() => signOut()}>Sign out</button>
        </>)
    }
    return (
        <a
            className={"rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"}
            href={"/auth/register"}>Register
        </a>
    )
}