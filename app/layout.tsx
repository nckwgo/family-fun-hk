import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Noto_Sans_TC } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-tc",
})

export const metadata: Metadata = {
  title: "Family Fun HK - 香港首個 AI 驅動家庭活動發現平台",
  description: "一站式家庭活動搜尋、日曆、即時推薦及社區互動平台",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-HK" className={`${inter.variable} ${notoSansTC.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
