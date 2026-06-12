"use client"

import { Package, Mountain, Layers, Building2, ArrowUpRight } from "lucide-react"
import { useLang } from "@/lib/i18n"

const products = [
  { icon: Package, titleKey: "p1Title", descKey: "p1Desc" },
  { icon: Mountain, titleKey: "p2Title", descKey: "p2Desc" },
  { icon: Layers, titleKey: "p3Title", descKey: "p3Desc" },
  { icon: Building2, titleKey: "p4Title", descKey: "p4Desc" },
] as const

export function Products() {
  const { t } = useLang()

  return (
    <section id="products" className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t("prodTag")}</span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("prodHeading")}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{t("prodLead")}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => {
            const Icon = p.icon
            return (
              <article
                key={i}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <span
                  aria-hidden
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/10 transition-transform duration-300 group-hover:scale-150"
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-heading text-xl font-bold text-foreground">{t(p.titleKey)}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t(p.descKey)}</p>
                <a
                  href="#contact"
                  className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  {t("learnMore")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
