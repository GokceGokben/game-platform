"use client";

import { GameCard } from "@/components/GameCard";
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import { gamesData } from "@/data/gamesData";

export default function HomePage() {
  const { lang, t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:px-6">
        {/* Hero section */}
        <section className="mb-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t.pageTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            {t.pageSubtitle}
          </p>
        </section>

        {/* Games grid */}
        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {gamesData.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                lang={lang}
                translations={{ playButton: t.playButton }}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} · Built with Next.js &amp; shadcn/ui
      </footer>
    </div>
  );
}