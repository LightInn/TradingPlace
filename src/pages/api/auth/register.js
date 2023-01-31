import {PrismaClient} from '@prisma/client'
import {signIn} from "next-auth/react";


export default async function handler(req, res) {

    if (req.method === 'POST') {
        console.log(req.body)


        if (
            req.body.email !== undefined
            && req.body.name !== undefined
            && req.body.password !== undefined
            && req.body.password.length > 0
        ) {
            const prisma = new PrismaClient()
            await prisma.user.create({
                data: {
                    email: req.body.email,
                    name: req.body.name,
                    password: req.body.password
                }
            }).then((result) => {

                signIn('credentials', {redirect: true, password: 'password', email: 'email'});

            }).catch((error) => {
                res.status(400).json(error)
            })

        }


        res.status(400).json({error: 'Bad body'})


    } else {
        res.status(400).json({error: 'Bad method'})
    }
}