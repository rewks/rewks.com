import Link from 'next/link'
import Logo from './logo'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    return <>
        <div className="header_container">
            <header>
                <Link href="/">
                    <div className="header_item1">
                        <div className="header_logo">
                            <Logo width="55" height="45" />
                        </div>
                        <div className={[inter.className, "header_title"].join(" ")}>
                            rewks
                        </div>
                    </div>
                </Link>
                <div className="header_item2">
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="#">Projects</Link>
                        <Link href="#">About</Link>
                    </nav>
                    <button type="button">T</button>
                </div>
            </header>
        </div>
    </>
}