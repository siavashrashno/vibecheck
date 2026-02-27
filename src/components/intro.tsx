"use client";

import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

interface IntroProps {
  onStart: () => void;
}

export function Intro({ onStart }: IntroProps) {
  const t = useTranslations("Intro");
  const common = useTranslations("Common");

  return (
    <div className="relative flex flex-col items-center justify-center max-w-3xl mx-auto px-6 space-y-12">
      <div className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-5 duration-700">
        <h1 className="text-4xl md:text-6xl tracking-tighter leading-[0.9] text-balance whitespace-nowrap">
          {t("title")}
        </h1>

        <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed md:max-w-sm mx-auto">
          {t("description")}
        </p>
      </div>

      <div className="animate-in fade-in slide-in-from-top-2 duration-700 delay-300 fill-mode-backwards">
        <Button
          size="lg"
          onClick={onStart}
          className="shadow-xl hover:scale-105 active:scale-95 transition-transform h-12"
        >
          {common("start_btn")}
        </Button>
      </div>
    </div>
  );
}
