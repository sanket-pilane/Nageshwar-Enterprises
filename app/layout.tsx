import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist_Mono, Inter, Noto_Sans_Devanagari, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const notoDevanagari = Noto_Sans_Devanagari({
  variable: '--font-noto-dev',
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
})
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nageshwar Enterprises | Building Material Supplier & Construction Solutions',
  description:
    'Nageshwar Enterprises — premium cement, sand, gravel, aggregates and turnkey construction projects in Pune. Trusted building material supplier.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${notoDevanagari.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
