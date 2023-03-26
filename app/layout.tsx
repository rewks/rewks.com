import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
