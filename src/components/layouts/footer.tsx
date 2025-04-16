import SemicolonLogo from "@/public/semicolonLogo";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <SemicolonLogo />
          <span className="text-sm font-semibold">Semicolon Labs</span>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Semicolon Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
