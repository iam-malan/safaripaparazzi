import type { Metadata, Viewport } from "next"
import { Open_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/navigation/main-nav"
import { Footer } from "@/components/footer"

// Font imports with Next.js font optimization
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Site metadata
export const metadata: Metadata = {
  title: {
    default: "Safari Paparazzi | Namibian Photography Tours",
    template: "%s | Safari Paparazzi",
  },
  description: "Experience the breathtaking landscapes and wildlife of Namibia through the lens of your camera. Join our expert-guided photography tours across Namibia's most stunning locations.",
  keywords: [
    "Namibia photography tours",
    "Safari photography",
    "African wildlife photography",
    "Landscape photography Namibia",
    "Photography workshops Namibia",
    "Swakopmund to Windhoek tour",
    "Namib Desert photography",
  ],
  authors: [{ name: "Safari Paparazzi" }],
  creator: "Safari Paparazzi",
  publisher: "Safari Paparazzi",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://safaripaparazzi.com"
  ),
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://safaripaparazzi.com",
    siteName: "Safari Paparazzi",
    title: "Safari Paparazzi | Namibian Photography Tours",
    description:
      "Capture the essence of Namibia with our expert-guided photography tours. Experience the perfect blend of adventure, wildlife, and stunning landscapes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Safari Paparazzi - Namibian Photography Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Paparazzi | Namibian Photography Tours",
    description:
      "Capture the essence of Namibia with our expert-guided photography tours. Experience the perfect blend of adventure, wildlife, and stunning landscapes.",
    images: [
      {
        url: "/images/twitter-image.jpg",
        width: 1200,
        height: 675,
        alt: "Safari Paparazzi - Namibian Photography Tours",
      },
    ],
    creator: "@safaripaparazzi",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#D4B483" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

interface RootLayoutProps {
  children: React.ReactNode
  // modal?: React.ReactNode // Removed as it's unused
}

// Create a layout component wrapper to prevent re-renders
function RootLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/images/hero-bg.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased flex flex-col",
        openSans.variable,
        playfair.variable
      )}>
        <RootLayoutContent>
          {children}
        </RootLayoutContent>
      </body>
    </html>
  );
}
