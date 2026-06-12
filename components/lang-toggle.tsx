"use client"

import { useLang, type Lang } from "@/lib/i18n"

export function LangToggle() {
  const { lang, setLang } = useLang()

  const options: { value: Lang; label: string }[] = [
    { value: "en", label: "ENG" },
    { value: "mr", label: "मरा" },
  ]

  return (
    <div
      role="group"
      aria-label="Language switch"
      className="relative flex items-center rounded-full border border-border bg-secondary p-1"
    >
      <span
        aria-hidden
        className="absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full bg-primary shadow-sm transition-transform duration-300"
        style={{ transform: lang === "en" ? "translateX(0)" : "translateX(100%)" }}
      />
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setLang(opt.value)}
          aria-pressed={lang === opt.value}
          className={`relative z-10 w-12 rounded-full px-2 py-1 text-xs font-semibold transition-colors ${
            lang === opt.value ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
