import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { auth } from '../../auth/[...nextauth]/auth'

export const revalidate = 0
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    // NOT WORKING WITHOUT EDGE!!!
    const session = await auth(req, res)

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' })
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
}
