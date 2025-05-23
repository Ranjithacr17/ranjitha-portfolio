import type React from "react"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/lib/registry"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ranjitha CR | Frontend Developer",
  description: "Portfolio website of Ranjitha CR, a Frontend Developer with 4 years of experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}


import './globals.css'