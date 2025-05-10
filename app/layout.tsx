import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { DesignSystemProvider } from "@/components/ui/design-system"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Muhammad Faisal - Frontend Developer",
  description:
    "Senior Frontend Developer specializing in building exceptional digital experiences with React, Next.js, and modern web technologies",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${poppins.variable} font-sans overflow-x-hidden`}>
        <DesignSystemProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <NavBar />
            <div className="min-h-screen">{children}</div>
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </DesignSystemProvider>
      </body>
    </html>
  )
}
