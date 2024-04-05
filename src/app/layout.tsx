import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Header } from '@/components/Header/Header'
import { Main } from '@/layouts/Main/Main'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'

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
            <head>
                <ColorSchemeScript />
            </head>
            <body className={inter.className}>
                <UserProvider>
                    <MantineProvider>
                        <ErrorBoundary>
                            <Header />
                            <Main>{children}</Main>
                        </ErrorBoundary>
                    </MantineProvider>
                </UserProvider>
            </body>
        </html>
    )
}
