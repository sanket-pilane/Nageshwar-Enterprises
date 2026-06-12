"use client"

import Image from "next/image"
import { ArrowRight, Phone, ShieldCheck } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "15+", key: "statYears" },
  { value: "500+", key: "statProjects" },
  { value: "1.2K+", key: "statClients" },
  { value: "50K+", key: "statTons" },
] as const

export function Hero() {
  const { t } = useLang()

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-20 lg:px-8">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            <ShieldCheck className="h-4 w-4" />
            {t("heroBadge")}
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("heroTitle")}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("heroSub")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              nativeButton={false}
              render={<a href="#contact" />}
              size="lg"
              className="group bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
            >
              {t("ctaQuote")}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#contact" />}
              size="lg"
              variant="outline"
              className="border-primary/30 bg-transparent text-primary hover:bg-primary/5"
            >
              <Phone className="mr-1 h-4 w-4" />
              {t("ctaContact")}
            </Button>
          </div>

          <dl className="mt-12 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.key} className="flex flex-col gap-1 bg-card px-4 py-5">
                <dt className="order-2 text-xs font-medium text-muted-foreground">{t(s.key)}</dt>
                <dd className="order-1 font-heading text-2xl font-bold text-primary">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -right-6 -top-6 hidden h-32 w-32 rounded-3xl bg-gold/30 blur-2xl lg:block"
          />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-truck.png"
              alt="Isometric illustration of a yellow construction tipper truck with building materials"
              width={900}
              height={720}
              priority
              className="h-auto w-full rounded-2xl"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl border border-border bg-background/90 px-4 py-3 shadow-lg backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-foreground">ISO Grade</p>
                <p className="text-xs text-muted-foreground">{t("why1Title")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
