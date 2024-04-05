'use server'

import { getSession } from '@auth0/nextjs-auth0'
import { Role } from '@prisma/client'
import { ReactNode } from 'react'

interface AdminOnlyProps {
    children: ReactNode
    type?: string
}

export const AdminOnly = async ({
    children,
    type = Role.ADMIN,
}: AdminOnlyProps) => {
    const session = await getSession()

    if ((session?.user?.roles as string[])?.includes(type)) {
        return children
    }

    return null
}
