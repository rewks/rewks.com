import Link from 'next/link'
import Logo from './logo'
import ThemeSwitch from './themePicker'
import styles from './header.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    return <>
        <div className={styles.header_container}>
            <header>
                <Link href="/">
                    <div className={styles.header_item1}>
                        <div className={styles.header_logo}>
                            <Logo width="55" height="45" />
                        </div>
                        <div className={[inter.className, styles.header_title].join(" ")}>
                            rewks
                        </div>
                    </div>
                </Link>
                <div className={styles.header_item2}>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/about">About</Link>
                    </nav>
                    <ThemeSwitch />
                </div>
            </header>
        </div>
    </>
}