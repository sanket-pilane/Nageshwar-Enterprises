"use client"

import { useState } from "react"
import { Menu, X, Hammer } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { LangToggle } from "./lang-toggle"
import { Button } from "@/components/ui/button"

const navKeys = [
  { key: "navHome", href: "#home" },
  { key: "navProducts", href: "#products" },
  { key: "navServices", href: "#products" },
  { key: "navProjects", href: "#why" },
  { key: "navAbout", href: "#why" },
  { key: "navContact", href: "#contact" },
] as const

export function SiteHeader() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Hammer className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-sans text-xs font-medium text-muted-foreground">{t("brandTop")}</span>
            <span className="font-heading text-lg font-bold tracking-wide text-foreground">{t("brandMain")}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navKeys.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <Button
            nativeButton={false}
            render={<a href="#contact" />}
            className="hidden bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex"
          >
            {t("ctaQuote")}
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navKeys.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
