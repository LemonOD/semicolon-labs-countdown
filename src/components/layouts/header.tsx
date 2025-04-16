import Link from "next/link"
import { ThemeToggle } from "@/src/components/layouts/theme-toggle"
import SemicolonLogo from "@/public/semicolonLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <SemicolonLogo/>
          <span className="text-lg font-semibold">Labs by Semicolon</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
