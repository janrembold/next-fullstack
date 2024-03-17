'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

export const Auth0 = () => {
    const { user, error, isLoading } = useUser()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    if (user) {
        return (
            <>
                <h3>User</h3>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </>
        )
    }

    return <a href="/api/auth/login">Login</a>
}
