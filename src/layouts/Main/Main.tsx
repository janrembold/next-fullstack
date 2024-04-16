import { ReactNode, Suspense } from 'react'
import styles from './Main.module.scss'
import { Navigation } from '@/components/Navigation/Navigation'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import { LanguageSwitch } from '@/components/LanguageSwitch/LanguageSwitch'

interface MainProps {
    children: ReactNode
}

export const Main = ({ children }: MainProps) => {
    return (
        <main className={styles.root}>
            <div className={styles.navigation}>
                <Navigation />
            </div>
            <div className={styles.content}>
                <Suspense>
                    <LanguageSwitch />
                </Suspense>
                <ErrorBoundary>{children}</ErrorBoundary>
            </div>
        </main>
    )
}
