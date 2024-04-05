import { prisma } from '@/lib/prisma'
import { Claims } from '@auth0/nextjs-auth0'
import { User } from '@prisma/client'

export const getOrCreateUserforAuthentication = async ({
    sub,
    email,
    name,
    picture = '',
}: Claims): Promise<User> => {
    let user = await findUserBySub(sub)

    if (!user) {
        user = await createNewUser({ sub, email, name, picture })
    }

    return user
}

async function findUserBySub(sub: string): Promise<User | undefined> {
    if (!sub) throw new Error('"sub" is required for authentication')

    const authentication = await prisma.authentication.findUnique({
        where: { sub },
        include: { user: true },
    })

    return authentication?.user
}

async function createNewUser({
    sub,
    email,
    name,
    picture = '',
}: Claims): Promise<User> {
    if (!email) throw new Error('"email" is required for new user creation')

    return await prisma.user.create({
        data: {
            email,
            name: name || email,
            picture,
            authentications: {
                create: {
                    sub,
                },
            },
        },
    })
}
