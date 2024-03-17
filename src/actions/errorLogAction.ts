'use server'

import prisma from '@/lib/prisma'
import { ErrorLog } from '@prisma/client'

interface errorLogActionProps {
    page?: number
    take?: number
}

export const errorLogAction = async ({
    page = 1,
    take = 10,
}: errorLogActionProps): Promise<ErrorLog[]> => {
    return await prisma.errorLog.findMany({
        skip: page * take - take,
        take,
        orderBy: {
            createdAt: 'desc',
        },
    })
}
