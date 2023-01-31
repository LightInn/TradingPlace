import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaClient} from '@prisma/client'

import NextAuth from "next-auth"

const prisma = new PrismaClient()

export const authOptions = {
    // Configure one or more authentication providers
    providers: [

        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Sign In",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {

                const dbUser = await prisma.user.findUnique({
                    where: {
                        email: credentials.username
                    }
                })
                if (dbUser) {
                    if (dbUser.password === credentials.password) {
                        console.log(dbUser)
                        return dbUser
                    }

                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })

    ],
    callbacks: {
        session({session, token, user}) {
            return session // The return type will match the one returned in `useSession()`
        },
    },
    pages: {
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}

export default NextAuth(authOptions)
