import SemicolonLogo from "@/public/semicolonLogo";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <img
                className="h-10"
                src="/img.png"
                alt="labsLogo"/>
          </div>
          <div>
            <small className="text-center md:text-sm text-muted-foreground md:font-semibold">Built to Solve. Structured for Scale.
              Designed for the Future.</small>
          </div>

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
