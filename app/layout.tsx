import './globals.css'
import Header from './header'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin'] })

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
      <body className={roboto.className}>
        <div className="page_container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
