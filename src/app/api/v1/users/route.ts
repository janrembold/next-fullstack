import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'
import { isAdmin } from '@/utils/user/isAdmin'
import { z } from 'zod'
import { parseApiGetParams } from '@/utils/api/parseApiGetParams'

const schema = z.object({
    search: z.string().default(''),
    take: z.number().min(1).max(50).default(5),
    skip: z.number().min(0).default(0),
})

export interface ApiGetUsersResponse {
    users: User[]
    count: number
    search: string
    take: number
    skip: number
}

export const GET = withApiAuthRequired(async (req: NextRequest) => {
    const session = await getSession()

    if (!isAdmin(session?.user?.roles)) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { search, take, skip } = parseApiGetParams(req, schema)
    const args = {
        where: {
            email: {
                contains: search,
            },
        },
        take,
        skip,
    }

    const [users, count] = await prisma.$transaction([
        prisma.user.findMany(args),
        prisma.user.count(args),
    ])

    const response: ApiGetUsersResponse = {
        users,
        count,
        search,
        take,
        skip,
    }

    return NextResponse.json(response)
})
