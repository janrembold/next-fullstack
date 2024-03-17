import {
    AfterCallbackAppRoute,
    Session,
    handleAuth,
    handleCallback,
} from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest } from 'next/server'
import prisma from '@/lib/prisma'

const afterCallback: AfterCallbackAppRoute = async (
    _req: NextRequest,
    session: Session,
) => {
    if (session.user) {
        console.log('user found', session.user)

        const user = await prisma.user.findUnique({
            where: {
                sub: session.user.sub,
            },
        })

        if (!user) {
            console.log('user not found in db, creating user')
            await prisma.user.create({
                data: {
                    sub: session.user.sub,
                    email: session.user.email,
                    name: session.user.name || session.user.email,
                    picture: session.user.picture || '',
                },
            })
        }
    } else {
        console.log('user not found', session)
    }

    return session
}

export const GET = handleAuth({
    onError(_req: Request, error: Error) {
        console.error(error)
    },
    callback: async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            return await handleCallback(req, res, {
                afterCallback,
            })
        } catch (error) {
            console.error(error)
        }
    },
})

// Auth0 User
// nickname: 'post',
// name: 'post@jr-webware.de',
// picture: 'https://s.gravatar.com/avatar/5eb0f42dd20546f54a35d7d448afb1bf?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpo.png',
// updated_at: '2024-03-17T14:57:39.648Z',
// email: 'post@jr-webware.de',
// email_verified: false,
// sub: 'auth0|65f704e3f2818959834be08c',
// sid: '-mxWQ1c4MPy06671nMUlskjPj_M8PPOH'

// Google OAuth
// given_name: 'Jan',
// family_name: 'Rembold',
// nickname: 'janrembold',
// name: 'Jan Rembold',
// picture: 'https://lh3.googleusercontent.com/a/ACg8ocIDEwcCmJIcX-AQHidBpf9rAg-LuypGW93J0ouJ_4Go2aM=s96-c',
// locale: 'de',
// updated_at: '2024-03-17T14:52:18.569Z',
// email: 'janrembold@gmail.com',
// email_verified: true,
// sub: 'google-oauth2|117650688771732348674',
// sid: 'auPLvqBu_OXMyQn1EDO_noFNORdrkwnp'
