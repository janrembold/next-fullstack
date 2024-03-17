import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Header } from '@/components/Header/Header'
import { Main } from '@/layouts/Main/Main'
import { TimeSync } from '@/components/TimeSync/TimeSync'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'NextJS Fullstack Starter',
    description:
        'NextJS, Server Actions, AuthJS, Auth0, Prisma, Zod, React Hook Form and more!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
            <body className={inter.className}>
                <UserProvider>
                    <ErrorBoundary>
                        <Header />
                        <Main>{children}</Main>
                        <TimeSync />
                    </ErrorBoundary>
                </UserProvider>
            </body>
        </html>
    )
}
