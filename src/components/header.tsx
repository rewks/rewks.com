import Link from 'next/link'
import Logo from '../components/logo'
import MobileNav from '../components/mobileNav'
import ThemeButton from '../components/themeButton'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
    return <>
        <div className="p-0 sm:p-2 px-2 flex justify-center items-center min-h-20 border border-b-stone-400 dark:border-b-black border-0 border-b border-solid bg-slate-300 dark:bg-dark-surfacevariant">
            <header className="flex justify-end w-full max-w-screen-xl">
                    <div>
                        <Link href="/">
                            <div className="flex items-center">
                                <div>
                                    <Logo width="45" height="45" />
                                </div>
                                <div className="hidden sm:block pl-2 font-semibold text-4xl">
                                    rewks
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex grow justify-end items-center">
                        <nav>
                            <div className="hidden sm:block [&>a]:px-2 [&>a]:text-xl [&>a]:font-medium ">
                                <Link href="/" className="dark:hover:text-dark-surfacetint">Home</Link>
                                <Link href="/blog" className="dark:hover:text-dark-surfacetint">Blog</Link>
                            </div>
                            <MobileNav />
                        </nav>
                    </div>
                    <div className="items-center justify-center pt-2">
                        <ThemeButton />
                    </div>
                </header>
        </div>
    </>
}