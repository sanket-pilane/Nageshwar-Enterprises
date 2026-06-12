"use client"

import { BadgeCheck, Truck, IndianRupee } from "lucide-react"
import { useLang } from "@/lib/i18n"

const items = [
  { icon: BadgeCheck, titleKey: "why1Title", descKey: "why1Desc" },
  { icon: Truck, titleKey: "why2Title", descKey: "why2Desc" },
  { icon: IndianRupee, titleKey: "why3Title", descKey: "why3Desc" },
] as const

export function WhyUs() {
  const { t } = useLang()

  return (
    <section id="why" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t("whyTag")}</span>
            <h2 className="mt-2 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("whyHeading")}
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {items.map((it, i) => {
                const Icon = it.icon
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{t(it.titleKey)}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t(it.descKey)}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative rounded-3xl bg-primary p-8 text-primary-foreground shadow-2xl shadow-primary/25 lg:p-10">
            <span
              aria-hidden
              className="absolute right-6 top-6 h-20 w-20 rounded-2xl border border-gold/40 bg-gold/10"
            />
            <p className="font-heading text-2xl font-bold leading-snug">{t("brandMain")}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/80">{t("footerTagline")}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: "15+", k: "statYears" },
                { v: "500+", k: "statProjects" },
                { v: "1.2K+", k: "statClients" },
                { v: "50K+", k: "statTons" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4">
                  <p className="font-heading text-2xl font-bold text-gold">{s.v}</p>
                  <p className="mt-1 text-xs text-primary-foreground/75">{t(s.k as "statYears")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
