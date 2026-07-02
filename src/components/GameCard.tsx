"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GameCardProps } from "@/types/game";
import { translateTag } from "@/data/tagTranslations";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function GameCard({ game, lang, translations }: GameCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleMouseEnter() {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }

  function handleMouseLeave() {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <Card
      className="group flex flex-col overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail / Video */}
      <div className="relative overflow-hidden h-80 bg-muted">
        {/* Next/Image handles basePath automatically */}
        <Image
          src={game.imageUrl}
          alt={game.title}
          fill
          className={cn(
            "object-cover transition-all duration-500 group-hover:scale-105",
            game.hoverVideoUrl && "group-hover:opacity-0"
          )}
        />

        {/* Hover video — basePath prepended manually */}
        {game.hoverVideoUrl && (
          <video
            ref={videoRef}
            src={`${BASE}${game.hoverVideoUrl}`}
            muted
            playsInline
            loop
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </div>

      {/* Title + Tags */}
      <CardHeader className="gap-2 pb-2">
        <CardTitle className="text-lg font-bold leading-tight">
          {game.title}
        </CardTitle>
        {game.tags && game.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {game.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-medium">
                {translateTag(tag, lang)}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      {/* Description */}
      <CardContent className="flex-1 pb-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {game.description[lang]}
        </p>
      </CardContent>

      {/* CTA */}
      <CardFooter className="pt-0">
        <a
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "default" }), "btn-gradient w-full justify-center")}
        >
          {translations.playButton}
        </a>
      </CardFooter>
    </Card>
  );
}