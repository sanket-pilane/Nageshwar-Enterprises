import { LanguageProvider } from "@/lib/i18n"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { WhyUs } from "@/components/why-us"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <Products />
          <WhyUs />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  )
}
