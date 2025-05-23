import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import StarsBackground from "@/components/stars-background"
import FloatingObjects from "@/components/floating-objects"
import CodingBackground from "@/components/coding-background"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "Ayaz Ahmed | Front-End Developer",
  description:
    "Professional portfolio of Ayaz Ahmed, a front-end developer with expertise in React, Next.js, and modern web technologies.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="data-theme" defaultTheme="coding" enableSystem>
          <div className="theme-container">
            <div className="space-theme-elements">
              <StarsBackground />
              <FloatingObjects />
            </div>
            <CodingBackground />
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
