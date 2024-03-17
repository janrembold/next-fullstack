import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { type NextAuthConfig } from 'next-auth'
import Auth0 from 'next-auth/providers/auth0'

const authConfig = {
    // debug: true,
    adapter: PrismaAdapter(prisma),
    providers: [
        Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER,
        }),
    ],
} satisfies NextAuthConfig

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth(authConfig)
