"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, User, Send, CheckCircle2 } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

const team = ["Anand Pawar", "Sudarshan Pawar"]
const phones = ["+91 8080903950", "+91 7276944912"]
const emails = ["anandpawar3539@gmail.com", "sudarshanpawar79477@gmail.com"]

export function Contact() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  const fieldClass =
    "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"

  return (
    <section id="contact" className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">{t("contactTag")}</span>
          <h2 className="mt-2 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("contactHeading")}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{t("contactLead")}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <InfoCard icon={Phone} label={t("phoneLabel")} lines={phones} hrefPrefix="tel:" />
            <InfoCard icon={Mail} label={t("emailLabel")} lines={emails} hrefPrefix="mailto:" />
            <InfoCard icon={MapPin} label={t("addrLabel")} lines={[t("address")]} />

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{t("teamHeading")}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {team.map((name) => (
                  <div key={name} className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <span className="text-sm font-medium text-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input required placeholder={t("formName")} className={fieldClass + " pl-9"} />
                </div>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <input required type="tel" placeholder={t("formPhone")} className={fieldClass + " pl-9"} />
                </div>
              </div>
              <textarea required rows={6} placeholder={t("formMsg")} className={fieldClass + " resize-none"} />
              <Button
                type="submit"
                size="lg"
                className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    {t("ctaContact")}
                  </>
                ) : (
                  <>
                    <Send className="mr-1 h-4 w-4" />
                    {t("formSubmit")}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon: Icon,
  label,
  lines,
  hrefPrefix,
}: {
  icon: React.ElementType
  label: string
  lines: string[]
  hrefPrefix?: string
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
        <div className="mt-1 flex flex-col">
          {lines.map((line) =>
            hrefPrefix ? (
              <a
                key={line}
                href={`${hrefPrefix}${line.replace(/\s/g, "")}`}
                className="break-words text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {line}
              </a>
            ) : (
              <p key={line} className="text-sm font-medium leading-relaxed text-foreground">
                {line}
              </p>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
