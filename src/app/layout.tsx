import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Header } from '@/components/Header/Header'
import { Main } from '@/layouts/Main/Main'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'
import { getLocale } from '@/i18n/server'
import { LocaleProvider } from '@/context/LocaleProvider'

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
    const locale = getLocale()

    return (
        <html lang={locale}>
            <head>
                <ColorSchemeScript />
            </head>
            <body className={inter.className}>
                <LocaleProvider value={locale}>
                    <UserProvider>
                        <MantineProvider>
                            <ErrorBoundary>
                                <Header />
                                <Main>{children}</Main>
                            </ErrorBoundary>
                        </MantineProvider>
                    </UserProvider>
                </LocaleProvider>
            </body>
        </html>
    )
}
