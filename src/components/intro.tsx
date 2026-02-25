"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface IntroProps {
  onStart: () => void;
}

export function Intro({ onStart }: IntroProps) {
  const t = useTranslations("Intro");
  const common = useTranslations("Common");

  return (
    <div className="relative flex flex-col items-center justify-center max-w-3xl mx-auto px-6 space-y-12">
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-light tracking-tighter leading-none">
          {t("title")}
        </h1>

        <p className="text-lg md:text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
          {t("description")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          size="lg"
          onClick={onStart}
          className="rounded-full shadow-xl hover:scale-105 transition-transform"
        >
          {common("start_btn")}
        </Button>
      </motion.div>
    </div>
  );
}
