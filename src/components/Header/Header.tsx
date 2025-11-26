import styles from './Header.module.scss'
import Link from 'next/link'
import { HeaderProfile } from './HeaderProfile'

export const Header = () => {
    return (
        <header className={styles.root}>
            <div>
                <Link href="/">HOME</Link>
            </div>
            <HeaderProfile />
        </header>
    )
}
