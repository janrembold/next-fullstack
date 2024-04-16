'use client'

import styles from './Header.module.scss'
import Link from 'next/link'
import { HeaderProfile } from './HeaderProfile'
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch'
import { Suspense } from 'react'

export const Header = () => {
    return (
        <header className={styles.root}>
            <div>
                <Link href="/">HOME</Link>
            </div>
            <Suspense>
                <LanguageSwitch />
            </Suspense>
            <HeaderProfile />
        </header>
    )
}
