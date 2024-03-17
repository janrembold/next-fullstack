import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'

export const revalidate = 0
export const GET = withApiAuthRequired(async (req: NextApiRequest) => {
    const session = await getSession()

    if (!session?.user) {
        // return res.status(401).json({ message: 'Unauthorized' })
        return NextResponse.error()
    }

    const { take = 2, search = '' } = req.query || {}

    const args: Prisma.ErrorLogFindManyArgs = {
        orderBy: {
            createdAt: 'desc',
        },
        take: take as number,
        where: search
            ? {
                  message: {
                      contains: search as string,
                  },
              }
            : undefined,
    }

    const logs = await prisma.errorLog.findMany(args)

    return NextResponse.json({ logs })
})
