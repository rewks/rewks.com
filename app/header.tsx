import Link from 'next/link'
import MobileNav from './mobileNav'
import Logo from './logo'
import ThemeSwitch from './themeSwitch'
import styles from './header.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    return <>
        <div className={styles.header_container}>
            <header>
                <div className={styles.header_item1}>
                    <Link href="/">
                        <div className={styles.header_brand}>
                            <div className={styles.header_logo}>
                                <Logo width="45" height="45" />
                            </div>
                            <div className={[inter.className, styles.header_title].join(" ")}>
                                rewks
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.header_item2}>
                    <nav>
                        <div className={styles.desktop_links}>
                            <Link href="/">Home</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/about">About</Link>
                        </div>
                        <MobileNav />
                    </nav>
                </div>
                <div className={styles.header_item3}>
                    <ThemeSwitch />
                </div>
            </header>
        </div>
    </>
}