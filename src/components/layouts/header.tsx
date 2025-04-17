import Link from "next/link"
import { ThemeToggle } from "@/src/components/layouts/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <img
              className="h-10"
              src="/img.png"
           alt="labsLogo"/>
          {/*<span className="text-lg font-semibold">Labs by Semicolon</span>*/}
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
