import prisma from '@/lib/prisma'
import { User } from '@auth0/nextjs-auth0/types'

export const createUserIfNotExists = async (user: User) =>
  await prisma.user.upsert({
    where: { id: user.sub },
    update: {},
    create: {
      id: user.sub,
      email: user.email || '',
      name: user.name || '',
      picture: user.picture || '',
    },
  })
