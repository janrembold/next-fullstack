'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import styles from './Navigation.module.scss'
import Link from 'next/link'
import { Role } from '@prisma/client'
import { isAdmin } from '@/utils/user/isAdmin'

export const Navigation = () => {
    const { user, isLoading } = useUser()

    if (isLoading) return <div>Loading...</div>

    return (
        <nav className={styles.root}>
            <div>TODO: Move to container</div>
            <p>Public routes</p>
            <ul>
                <li>
                    <Link href="/example/public">TODO: Add something here</Link>
                </li>
            </ul>

            {isAdmin(user?.roles) ? (
                <>
                    <p>Admin routes</p>
                    <ul>
                        <li>
                            <Link href="/admin/users">Users</Link>
                        </li>
                    </ul>
                </>
            ) : null}

            {user ? (
                <>
                    <p>Protected routes</p>
                    <ul>
                        <li>
                            <Link href="/example/user-info">
                                TODO: Add something here
                            </Link>
                        </li>
                    </ul>
                </>
            ) : null}
        </nav>
    )
}
