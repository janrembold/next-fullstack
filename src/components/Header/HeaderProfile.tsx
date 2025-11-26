'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { SignOut } from '../Auth/SignOut'
import { SignIn } from '../Auth/SignIn'

export const HeaderProfile = () => {
    const { user, isLoading } = useUser()

    if (isLoading) return null

    if (user) console.log('User in HeaderProfile:', user)

    return <div>{user ? <SignOut /> : <SignIn />}</div>
}
