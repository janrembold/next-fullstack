import prisma from '@/lib/prisma'

export const logError = async (message: string) => {
    console.error(message)
    await prisma.errorLog.create({ data: { message } })
}
