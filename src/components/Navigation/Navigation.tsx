'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import styles from './Navigation.module.scss'
import Link from 'next/link'

export const Navigation = () => {
    const { user, isLoading } = useUser()

    if (isLoading) return <div>Loading...</div>

    return (
        <nav className={styles.root}>
            <p>Public routes</p>
            <ul>
                <li>
                    <Link href="/server-example">Server Example</Link>
                </li>
            </ul>

            {user ? (
                <>
                    <p>Protected routes</p>
                    <ul>
                        <li>
                            <Link href="/protected">Protected Example</Link>
                        </li>
                        <li>
                            <Link href="/server-actions">
                                Server Actions Example
                            </Link>
                        </li>
                        <li>
                            <Link href="/error-log">Error Logs</Link>
                        </li>
                    </ul>
                </>
            ) : null}
        </nav>
    )
}
