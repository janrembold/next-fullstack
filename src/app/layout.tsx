import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { Header } from '@/components/Header/Header'
import { Main } from '@/layouts/Main/Main'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import { NextIntlClientProvider } from 'next-intl'

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
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <NextIntlClientProvider>
            <Header />
            <Main>{children}</Main>
          </NextIntlClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
