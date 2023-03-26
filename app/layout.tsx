import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Logo from './logo'


const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body>
        <div className="page_container">
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

                </nav>
              </div>
            </header>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
