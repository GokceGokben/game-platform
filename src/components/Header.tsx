"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/types/game";

export function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo / label */}
        <span className="text-sm font-semibold tracking-wide text-foreground">
          {t.gamesLabel}
        </span>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* TR | EN split toggle */}
          <div className="flex items-center rounded-lg border bg-muted/50 p-0.5 text-xs font-semibold">
            {(["tr", "en"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => lang !== l && toggleLang()}
                className={`rounded-md px-2.5 py-1 uppercase tracking-widest transition-all ${
                  lang === l
                    ? "btn-gradient shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Dark / Light toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="size-8"
          >
            <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  );
}