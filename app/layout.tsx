import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JCI EXchange 2025 - Uniting LOMs for Global Impact",
  description:
    "Join us for 4 amazing days of networking, cultural exchange, and international training in beautiful Sousse, Tunisia. November 1-4, 2025.",
  keywords:
    "JCI, EXchange, 2025, Sousse, Tunisia, networking, cultural exchange, international training, JCI Sousse, LOMs",
  authors: [{ name: "JCI Sousse" }],
  creator: "JCI Sousse",
  publisher: "JCI Sousse",
  openGraph: {
    title: "JCI EXchange 2025 - Uniting LOMs for Global Impact",
    description:
      "Join us for 4 amazing days of networking, cultural exchange, and international training in beautiful Sousse, Tunisia.",
    url: "https://jciexchange2025.com",
    siteName: "JCI EXchange 2025",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JCI EXchange 2025 - Sousse, Tunisia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JCI EXchange 2025 - Uniting LOMs for Global Impact",
    description:
      "Join us for 4 amazing days of networking, cultural exchange, and international training in beautiful Sousse, Tunisia.",
    images: ["/og-image.jpg"],
    creator: "@JCISousse",
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
  verification: {
    google: "your-google-verification-code",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0097D7" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
