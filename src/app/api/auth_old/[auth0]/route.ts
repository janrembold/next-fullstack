import { getOrCreateUserforAuthentication } from '@/actions/User/getOrCreateUserforAuthentication'
import {
    AfterCallbackAppRoute,
    Session,
    handleAuth,
    handleCallback,
} from '@auth0/nextjs-auth0'
import { NextRequest } from 'next/server'

const afterCallback: AfterCallbackAppRoute = async (
    _req: NextRequest,
    session: Session,
) => {
    if (session.user) {
        const user = await getOrCreateUserforAuthentication(session.user)

        if (!user) {
            throw new Error(
                'User not found and not possible to create a new one',
            )
        }

        session.user.id = user.id
        session.user.roles = user.roles
    }

    return session
}

export const GET = handleAuth({
    onError(_req: Request, error: Error) {
        console.error(error)
    },
    callback: handleCallback({ afterCallback }),
})
