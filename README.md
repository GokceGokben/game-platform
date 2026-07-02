# Game Platform

A modern, responsive portfolio website showcasing games developed by Gökçe Gökben and Umut Arda Tansever.

Live demo: _coming soon_

---

## Features

- **Game Cards** — Each game displays a thumbnail, tags, description, and a direct play button
- **Hover Video Preview** — Hovering a card automatically plays a gameplay preview video
- **TR / EN Language Support** — Titles, descriptions, and tags switch instantly between Turkish and English
- **Dark / Light Theme** — Preference is persisted in `localStorage` across page reloads
- **Fully Responsive** — 1 column on mobile, 2 on tablet, 3–4 on desktop
- **Data-Driven Architecture** — Adding a new game only requires updating `gamesData.ts`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| UI Components | [shadcn/ui](https://ui.shadcn.com) — Card, Button, Badge |
| Theme | Custom React Context (`ThemeContext`) |
| i18n | Custom React Context (`LanguageContext`) |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # CSS custom properties (theme tokens)
│   ├── layout.tsx           # Root layout — ThemeProvider + LanguageProvider
│   └── page.tsx             # Home page — renders the game grid
├── components/
│   ├── GameCard.tsx         # Reusable game card component
│   ├── Header.tsx           # Sticky header — language & theme toggles
│   ├── ThemeProvider.tsx    # Dark / light mode provider
│   └── ui/                  # shadcn/ui primitives (card, button, badge)
├── contexts/
│   ├── LanguageContext.tsx  # TR / EN language state and translations
│   └── ThemeContext.tsx     # Dark / light theme state
├── data/
│   ├── gamesData.ts         # All game entries — edit here to add games
│   └── tagTranslations.ts   # Tag label translations (TR / EN)
├── lib/
│   └── utils.ts             # cn() utility
└── types/
    └── game.ts              # Game, GameCardProps, Language interfaces

public/
└── games/
    └── <game-id>/
        ├── thumbnail.png    # Static preview image
        └── hover.mp4        # Autoplay video on hover (optional)
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

---


3. If you introduce a new tag, add its translation to `src/data/tagTranslations.ts`.

---

## Games

| Game | Link |
|---|---|
| Sky Dash | [Play](https://gokcegokben.github.io/Sky-Dash/) |
| Aqua Dash | [Play](https://gokcegokben.github.io/Aqua-Dash) |
| Block Burst | [Play](https://gokcegokben.github.io/Block-Burst) |
| AA Clone | [Play](https://umutardatansever.github.io/AA/) |
| Satranç | [Play](https://umutardatansever.github.io/Satran-/) |
| UmixJump | [Play](https://umutardatansever.github.io/UmixJump/) |
| Bayrak Oyunu | [Play](https://umutardatansever.github.io/BayrakOyunu/) |
| severTAN | [Play](https://umutardatansever.github.io/severTAN/) |

---

## Credits

| Name | Role |
|---|---|
| [Gökçe Gökben](https://github.com/GokceGokben) | Game Developer & Web Developer |
| [Umut Arda Tansever](https://github.com/umutardatansever) | Game Developer & Web Developer|

---

## License

This project is licensed under the [MIT License](LICENSE).
