import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Safari Paparazzi - Professional Photography Tours in Namibia',
  description: 'Capture Africa\'s wild beauty with Safari Paparazzi. Professional photography tours through Namibia\'s most breathtaking landscapes and wildlife encounters.',
  keywords: 'safari photography, Namibia tours, wildlife photography, landscape photography, African safari, photography workshops',
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#D4AF37',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
