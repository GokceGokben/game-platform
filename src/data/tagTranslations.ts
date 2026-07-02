import { Language } from "@/types/game";

const translations: Record<string, Record<Language, string>> = {
  "Action":        { tr: "Aksiyon",         en: "Action" },
  "Endless Runner":{ tr: "Sonsuz Koşu",     en: "Endless Runner" },
  "Arcade":        { tr: "Arcade",           en: "Arcade" },
  "Puzzle":        { tr: "Bulmaca",          en: "Puzzle" },
  "Strategy":      { tr: "Strateji",         en: "Strategy" },
  "Board Game":    { tr: "Masa Oyunu",       en: "Board Game" },
  "Platformer":    { tr: "Platform",         en: "Platformer" },
  "Skill":         { tr: "Beceri",           en: "Skill" },
  "Precision":     { tr: "Hassasiyet",       en: "Precision" },
  "Quiz":          { tr: "Bilgi Yarışması",  en: "Quiz" },
  "Educational":   { tr: "Eğitici",          en: "Educational" },
  "Casual":        { tr: "Gündelik",         en: "Casual" },
};

export function translateTag(tag: string, lang: Language): string {
  return translations[tag]?.[lang] ?? tag;
}