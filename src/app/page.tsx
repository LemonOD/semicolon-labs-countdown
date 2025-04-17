import CountdownTimer from "@/src/components/countdownComp/countdown-timer"
import { Footer } from "@/src/components/layouts/footer"
import { Header } from "@/src/components/layouts/header"
import {features} from "@/src/constants/features";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container flex flex-col items-center justify-center gap-6 py-12 text-center md:py-16 lg:py-24">
          <div className="mx-auto max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold text-blue-800 tracking-tighter sm:text-5xl md:text-6xl">Labs by Semicolon</h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Strategic Innovation. Engineered from Africa.
            </p>
          </div>
          <div className="w-full max-w-md">
            <CountdownTimer targetDate="2025-04-23T00:01:00" />
          </div>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-semibold">Coming Soon</h2>
            <p className="text-muted-foreground">
              Labs by Semicolon is the applied innovation and R&D unit of Semicolon Africa —
              where emerging technologies, domain expertise, and talent converge to solve complex
              challenges across industries.
            </p>
            <p className="text-muted-foreground pt-10">
              Our platform showcases the future of enterprise and society through projects and prototypes
              rooted in AI, cloud infrastructure, blockchain/Web3, data engineering, cybersecurity,
              and human-centered systems design — all built by Africa’s rising generation of builders and thinkers.
            </p>
          </div>
        </section>
        <section className="container py-12 md:py-16 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
