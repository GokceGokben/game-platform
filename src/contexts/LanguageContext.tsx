"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "@/types/game";

interface Translations {
  pageTitle: string;
  pageSubtitle: string;
  playButton: string;
  gamesLabel: string;
}

const translationsMap: Record<Language, Translations> = {
  tr: {
    pageTitle: "Oyun Portfolyom",
    pageSubtitle:
      "Kendi tasarladığım ve geliştirdiğim oyunları keşfet. Her biri farklı bir meydan okuma sunuyor.",
    playButton: "Oyunu Oyna",
    gamesLabel: "Oyunlar",
  },
  en: {
    pageTitle: "My Game Portfolio",
    pageSubtitle:
      "Explore games I designed and developed from scratch. Each one offers a unique challenge.",
    playButton: "Play Game",
    gamesLabel: "Games",
  },
};

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("tr");

  const toggleLang = () => setLang((prev) => (prev === "tr" ? "en" : "tr"));

  return (
    <LanguageContext.Provider value={{ lang, t: translationsMap[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}