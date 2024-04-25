import styles from './Header.module.scss'
import Link from 'next/link'
import { HeaderProfile } from './HeaderProfile'
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher'
import { getLocale } from '@/i18n/server'

export const Header = () => {
    return (
        <header className={styles.root}>
            <div>
                <Link href="/">HOME</Link>
            </div>
            <LocaleSwitcher />
            <HeaderProfile />
        </header>
    )
}
