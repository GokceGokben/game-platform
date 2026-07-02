import { Game } from "@/types/game";

export const gamesData: Game[] = [
  {
    id: "sky-dash",
    title: "Sky Dash",
    description: {
      tr: "Gökyüzünde engelleri aşarak en yüksek skoru hedeflediğin heyecan verici bir macera.",
      en: "An exciting adventure where you aim for the highest score by overcoming obstacles in the sky.",
    },
    url: "https://gokcegokben.github.io/Sky-Dash/",
    imageUrl: "/games/sky-dash/thumbnail.png",
    hoverVideoUrl: "/games/sky-dash/hover.mp4",
    tags: ["Action", "Endless Runner"],
  },
  {
    id: "aqua-dash",
    title: "Aqua Dash",
    description: {
      tr: "Sualtı dünyasının zorluklarına karşı reflekslerini test et.",
      en: "Test your reflexes against the challenges of the underwater world.",
    },
    url: "https://gokcegokben.github.io/Aqua-Dash",
    imageUrl: "/games/aqua-dash/thumbnail.png",
    hoverVideoUrl: "/games/aqua-dash/hover.mp4",
    tags: ["Action", "Endless Runner"],
  },
  {
    id: "block-burst",
    title: "Block Burst",
    description: {
      tr: "Blokları patlatarak stratejini konuştur ve ekranı temizle.",
      en: "Show your strategy by bursting blocks and clear the screen.",
    },
    url: "https://gokcegokben.github.io/Block-Burst",
    imageUrl: "/games/block-burst/thumbnail.png",
    hoverVideoUrl: "/games/block-burst/hover.mp4",
    tags: ["Puzzle", "Strategy"],
  },
  {
    id: "aa-clone",
    title: "AA Clone",
    description: {
      tr: "Efsanevi AA oyununun zorlu ve bağımlılık yapan yeniden yapımı.",
      en: "A challenging and addictive remake of the legendary AA game.",
    },
    url: "https://umutardatansever.github.io/AA/",
    hoverVideoUrl: "/games/aa-clone/hover.mp4",
    imageUrl: "/games/aa-clone/thumbnail.png",
    tags: ["Skill", "Precision"],
  },
  {
    id: "satranc",
    title: "Satranç",
    description: {
      tr: "Klasik satranç deneyimi; hamle hamle rakibini mat etmeye çalış.",
      en: "Classic chess experience — outmaneuver your opponent move by move.",
    },
    url: "https://umutardatansever.github.io/Satran-/",
    imageUrl: "/games/satranc/thumbnail.png",
    hoverVideoUrl: "/games/satranc/hover.mp4",
    tags: ["Strategy", "Board Game"],
  },
  {
    id: "umix-jump",
    title: "UmixJump",
    description: {
      tr: "Zıplayarak engelleri aş, ritmi hisset ve yükseklere tırman.",
      en: "Jump through obstacles, feel the rhythm and climb to the top.",
    },
    url: "https://umutardatansever.github.io/UmixJump/",
    imageUrl: "/games/umix-jump/thumbnail.png",
    hoverVideoUrl: "/games/umix-jump/hover.mp4",
    tags: ["Platformer", "Arcade"],
  },
  {
    id: "bayrak-oyunu",
    title: "Bayrak Oyunu",
    description: {
      tr: "Dünya bayraklarını tanı, ülkeleri eşleştir ve coğrafya bilgini sına.",
      en: "Recognize world flags, match countries and test your geography knowledge.",
    },
    url: "https://umutardatansever.github.io/BayrakOyunu/",
    imageUrl: "/games/bayrak-oyunu/thumbnail.png",
    tags: ["Quiz", "Educational"],
  },
  {
    id: "severtan",
    title: "severTAN",
    description: {
      tr: "Kendine özgü mekanikleriyle seni ekrana kilitleyen bağımlılık yapan bir deneyim.",
      en: "An addictive experience with unique mechanics that keeps you glued to the screen.",
    },
    url: "https://umutardatansever.github.io/severTAN/",
    imageUrl: "/games/severtan/thumbnail.png",
    hoverVideoUrl: "/games/severtan/hover.mp4",
    tags: ["Casual", "Skill"],
  },
];
