"use client"

import { Hammer, ShieldCheck } from "lucide-react"
import { useLang } from "@/lib/i18n"

const footerNav = [
  { key: "navHome", href: "#home" },
  { key: "navProducts", href: "#products" },
  { key: "navServices", href: "#products" },
  { key: "navProjects", href: "#why" },
  { key: "navAbout", href: "#why" },
  { key: "navContact", href: "#contact" },
] as const

export function SiteFooter() {
  const { t } = useLang()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                <Hammer className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-xs font-medium text-primary-foreground/70">{t("brandTop")}</span>
                <span className="font-heading text-lg font-bold tracking-wide">{t("brandMain")}</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">{t("footerTagline")}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span className="text-xs font-semibold uppercase tracking-wide text-gold">{t("securityBadge")}</span>
            </div>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              {t("navServices")}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {footerNav.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-gold"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              {t("navContact")}
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li>+91 8080903950</li>
              <li>+91 7276944912</li>
              <li className="break-words">anandpawar3539@gmail.com</li>
              <li className="leading-relaxed">{t("address")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {t("brandMain")}. {t("rights")}
          </p>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <p>Anand Pawar &amp; Sudarshan Pawar</p>
            <p>
              Designed by{" "}
              <span className="font-semibold text-gold">Sanket Pilane</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
