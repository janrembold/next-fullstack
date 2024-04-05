import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { isAdmin } from '@/utils/user/isAdmin'
import { userSchema } from '@/schemas/userSchema'
import { Role } from '@prisma/client'

export const GET = withApiAuthRequired(
    async (_req: NextRequest, { params: { id } }: any) => {
        const session = await getSession()

        if (!isAdmin(session?.user?.roles)) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
        }

        const user = await prisma.user.findUnique({
            where: { id },
        })

        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 },
            )
        }

        return NextResponse.json(user)
    },
)

export const PATCH = withApiAuthRequired(
    async (req: NextRequest, { params: { id } }: any) => {
        const session = await getSession()

        if (!isAdmin(session?.user?.roles)) {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
        }

        const { isAdmin: isAdminValue, ...restProps } = userSchema.parse(
            await req.json(),
        )

        const user = await prisma.user.update({
            where: { id },
            data: {
                ...restProps,
                roles: [Role.USER, ...(isAdminValue ? [Role.ADMIN] : [])],
            },
        })

        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 },
            )
        }

        return NextResponse.json(user)
    },
)
