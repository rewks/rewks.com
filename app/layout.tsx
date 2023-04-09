import './globals.css'
import Providers from './components/providers'
import Header from './components/header'
import Footer from './components/footer'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export const metadata = {
    title: 'rewks',
    description: 'A personal website, blog and portfolio.',
    category: 'technology',
    keywords: ['cybersecurity', 'hacking', 'blog'],
    themeColor: 'pink',
    viewport: 'width=device-width, initial-scale=1.0',
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
            <body className={rubik.className}>
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
