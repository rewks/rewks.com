import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { inter } from './fonts'
import Header from '../components/header'
import Footer from '../components/footer'


export const metadata: Metadata ={
    title: 'rewks.com',
    description: 'Personal site and blog for rewks',
    category: 'Technology',
    keywords: ['Cybersecurity', 'blog'],
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <Script src="/js/theme.js" strategy="beforeInteractive"/>
            </head>
            <body className={[inter.className, "bg-slate-200", "dark:bg-dsurface-100", "text-black", "dark:text-dsurface-200"].join(" ")}>
                <Header />
                <div className="grow w-full max-w-7xl px-4 self-center">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}