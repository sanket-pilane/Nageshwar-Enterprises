"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Lang = "en" | "mr"

type Dict = Record<string, { en: string; mr: string }>

export const dict = {
  navHome: { en: "Home", mr: "मुख्य" },
  navProducts: { en: "Products", mr: "उत्पादने" },
  navServices: { en: "Services", mr: "सेवा" },
  navProjects: { en: "Projects", mr: "प्रकल्प" },
  navAbout: { en: "About", mr: "बद्दल" },
  navContact: { en: "Contact", mr: "संपर्क" },

  brandTop: { en: "Nageshwar Construction", mr: "नागेश्वर कन्स्ट्रक्शन" },
  brandMain: { en: "NAGESHWAR ENTERPRISES", mr: "नागेश्वर एंटरप्रायझेस" },

  heroBadge: { en: "Trusted Since Day One", mr: "विश्वासार्ह भागीदार" },
  heroTitle: {
    en: "BUILDING MATERIAL SUPPLIER & CONSTRUCTION SOLUTIONS",
    mr: "इमारत साहित्य पुरवठादार आणि बांधकाम उपाय",
  },
  heroSub: {
    en: "From foundation to finish — premium materials, dependable supply, and turnkey project delivery across Pune.",
    mr: "पायापासून पूर्णत्वापर्यंत — दर्जेदार साहित्य, विश्वासार्ह पुरवठा आणि टर्नकी प्रकल्प वितरण.",
  },
  ctaQuote: { en: "Get a Quote", mr: "कोटेशन मिळवा" },
  ctaContact: { en: "Contact Us", mr: "संपर्क करा" },

  statYears: { en: "Years of Trust", mr: "वर्षांचा विश्वास" },
  statProjects: { en: "Projects Delivered", mr: "पूर्ण प्रकल्प" },
  statClients: { en: "Happy Clients", mr: "समाधानी ग्राहक" },
  statTons: { en: "Tons Supplied", mr: "टन पुरवठा" },

  prodTag: { en: "What We Offer", mr: "आम्ही काय देतो" },
  prodHeading: { en: "Products & Services", mr: "उत्पादने आणि सेवा" },
  prodLead: {
    en: "A complete range of construction materials and end-to-end building solutions under one roof.",
    mr: "बांधकाम साहित्य आणि संपूर्ण बांधकाम उपायांची संपूर्ण श्रेणी एकाच ठिकाणी.",
  },

  p1Title: { en: "Premium Cement", mr: "प्रिमियम सिमेंट" },
  p1Desc: {
    en: "High-grade OPC & PPC cement from leading brands for lasting strength.",
    mr: "टिकाऊ मजबुतीसाठी आघाडीच्या ब्रँडचे उच्च-दर्जाचे सिमेंट.",
  },
  p2Title: { en: "Sand & Gravel", mr: "वाळू आणि खडी" },
  p2Desc: {
    en: "Clean, screened river and crushed sand with quality gravel for every mix.",
    mr: "प्रत्येक मिश्रणासाठी स्वच्छ, चाळलेली वाळू आणि दर्जेदार खडी.",
  },
  p3Title: { en: "Aggregates", mr: "अॅग्रीगेट्स" },
  p3Desc: {
    en: "Graded aggregates and crushed stone for strong, durable concrete.",
    mr: "मजबूत, टिकाऊ काँक्रीटसाठी श्रेणीबद्ध अॅग्रीगेट्स आणि खडी.",
  },
  p4Title: { en: "Turnkey Projects", mr: "टर्नकी प्रकल्प" },
  p4Desc: {
    en: "Complete construction execution — design, build and handover, hassle-free.",
    mr: "संपूर्ण बांधकाम अंमलबजावणी — डिझाइन, बांधकाम आणि हस्तांतरण.",
  },
  learnMore: { en: "Learn more", mr: "अधिक माहिती" },

  whyTag: { en: "Why Nageshwar", mr: "नागेश्वर का?" },
  whyHeading: { en: "Built on Reliability", mr: "विश्वासार्हतेवर आधारित" },
  why1Title: { en: "Certified Quality", mr: "प्रमाणित गुणवत्ता" },
  why1Desc: {
    en: "Every batch is quality-checked to meet construction-grade standards.",
    mr: "प्रत्येक बॅच बांधकाम दर्जाच्या मानकांनुसार तपासली जाते.",
  },
  why2Title: { en: "On-Time Delivery", mr: "वेळेवर वितरण" },
  why2Desc: {
    en: "Our fleet ensures materials reach your site exactly when you need them.",
    mr: "आमचा ताफा आपल्याला हवे तेव्हा साहित्य साइटवर पोहोचवतो.",
  },
  why3Title: { en: "Fair Pricing", mr: "योग्य किंमत" },
  why3Desc: {
    en: "Transparent, competitive rates with no hidden charges, ever.",
    mr: "पारदर्शक, स्पर्धात्मक दर — कोणतेही छुपे शुल्क नाही.",
  },

  contactTag: { en: "Get In Touch", mr: "संपर्क साधा" },
  contactHeading: { en: "Let's Build Together", mr: "चला एकत्र बांधूया" },
  contactLead: {
    en: "Reach out for quotes, bulk orders or project consultations. Our team is ready to help.",
    mr: "कोटेशन, मोठ्या ऑर्डर्स किंवा प्रकल्प सल्ल्यासाठी संपर्क साधा.",
  },
  teamHeading: { en: "Our Team", mr: "आमची टीम" },
  phoneLabel: { en: "Phone", mr: "फोन" },
  emailLabel: { en: "Email", mr: "ईमेल" },
  addrLabel: { en: "Address", mr: "पत्ता" },
  address: {
    en: "At. Shriramnagar, Post. Khed-Shivapur, Tal. Haveli, Dist. Pune - 412 205.",
    mr: "मु. श्रीरामनगर, पो. खेड-शिवापूर, ता. हवेली, जि. पुणे - ४१२ २०५.",
  },
  formName: { en: "Your Name", mr: "तुमचे नाव" },
  formPhone: { en: "Phone Number", mr: "फोन नंबर" },
  formMsg: { en: "What do you need?", mr: "तुम्हाला काय हवे आहे?" },
  formSubmit: { en: "Request a Quote", mr: "कोटेशन विनंती" },

  footerTagline: {
    en: "Your trusted partner in building materials and construction solutions.",
    mr: "इमारत साहित्य आणि बांधकाम उपायांमधील तुमचा विश्वासार्ह भागीदार.",
  },
  securityBadge: { en: "Security Certified", mr: "सुरक्षा प्रमाणित" },
  rights: { en: "All rights reserved.", mr: "सर्व हक्क राखीव." },
} satisfies Dict

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: keyof typeof dict) => string
}

const LangContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")
  const t = (key: keyof typeof dict) => dict[key][lang]
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}
