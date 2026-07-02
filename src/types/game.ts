export type Language = "tr" | "en";

export interface LocalizedString {
  tr: string;
  en: string;
}

export interface Game {
  id: string;
  title: string;
  description: LocalizedString;
  url: string;
  imageUrl: string;
  hoverVideoUrl?: string;
  tags?: string[];
}

export interface GameCardProps {
  game: Game;
  lang: Language;
  translations: {
    playButton: string;
  };
}
