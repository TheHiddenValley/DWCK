import "./globals.css"

import { Metadata } from "next"
import localFont from "next/font/local"
import { DesktopProvider } from "@/context/desktop-context"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner"

import { cn } from "@/lib/utils"
import Desktop from "@/components/desktop"
import { DesktopDialog } from "@/components/desktop-dialog"
import { MainNav } from "@/components/main-nav"

const fontLevi = localFont({
  src: "../assets/MS Sans Serif.ttf",
  variable: "--font-levi",
})

export const metadata: Metadata = {
  title: {
    template: "the DWCK_FWCKs",
    default: "the DWCK_FWCKs",
  },
  description:
    "I'm a DWCK that got FWCK by the dev! The community took over so now we are one BIG QWCKing family.. I look at the sky every night and have always dreamed of flying. Help me reach my dream! You will find that someday I will fly and it may be too late.",
  keywords: ["DWCK", "FWCK", "community", "NFT", "art", "dream", "fly"],
  authors: [{ name: "DWCK Art" }],
  creator: "DWCK Art",
  publisher: "DWCK Art",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "the DWCK_FWCKs",
    description:
      "I'm a DWCK that got FWCK by the dev! The community took over so now we are one BIG QWCKing family.. I look at the sky every night and have always dreamed of flying. Help me reach my dream! You will find that someday I will fly and it may be too late.",
    url: "https://dwck.art",
    images: [
      {
        url: "https://pbs.twimg.com/profile_banners/1861846689197211648/1732768088/1500x500",
        width: 1500,
        height: 500,
        alt: "DWCK_FWCKs Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "the DWCK_FWCKs",
    description:
      "I'm a DWCK that got FWCK by the dev! The community took over so now we are one BIG QWCKing family.. I look at the sky every night and have always dreamed of flying. Help me reach my dream! You will find that someday I will fly and it may be too late.",
    images: [
      "https://pbs.twimg.com/profile_banners/1861846689197211648/1732768088/1500x500",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `relative min-h-screen font-levi scrollbar scrollbar-track-windows scrollbar-thumb-windows-dark`,
          fontLevi.className
        )}
        style={{
          backgroundColor: "rgba(254,255,55,255)",
        }}
      >
        <Analytics />
        <DesktopProvider>
          <Desktop />
          <DesktopDialog />
        </DesktopProvider>
        <main className="flex-1">{children}</main>
        <MainNav />
        <Toaster />
      </body>
    </html>
  )
}
