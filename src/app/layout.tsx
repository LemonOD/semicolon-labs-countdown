import type React from "react"
import "@/src/app/globals.css"
import {Inter} from "next/font/google"
import {ThemeProvider} from "@/src/components/layouts/theme-provider"

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "Semicolon Labs -Coming Soon",
    description: "Showcasing innovative works from Semicolon Africa's technology labs.",
    icons: {
        icon: "/labsLogo.png",
    },
}
export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        </body>
        </html>
    )
}
