import type React from "react"
import type { Metadata } from "next"
import { Dongle } from "next/font/google"
import "./globals.css"

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dongle.className}>
      <body>{children}</body>
    </html>
  )
}
