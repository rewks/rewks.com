import './globals.css'
import Providers from './providers'
import Header from './header'
import Footer from './footer'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata = {
    title: 'rewks',
    description: 'A personal website, blog and portfolio.',
    category: 'technology',
    keywords: ['cybersecurity', 'hacking', 'blog'],
    themeColor: 'pink',
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
        <html lang="en" suppressHydrationWarning>
            <body className={roboto.className}>
                <Providers>
                    <Header />
                    <div className="content_container">
                        {children}
                    </div>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
