"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Progress } from "@/components/ui/progress";
import { Question } from "../types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuestionCardProps {
  data: Question;
  onAnswer: (vibe: string) => void;
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
}

export const QuestionCard = ({
  data,
  onAnswer,
  currentStep,
  totalSteps,
  onPrev,
}: QuestionCardProps) => {
  const t = useTranslations();
  const progressValue = (currentStep / totalSteps) * 100;
  const locale = useLocale();
  const isRTL = locale === "fa";

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={data.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Card className="border-none shadow-2xl bg-card/60 backdrop-blur-md overflow-hidden">
            <CardHeader className="flex flex-row justify-between items-center pb-6">
              <Badge
                variant="outline"
                className="text-[10px] uppercase tracking-widest opacity-60"
              >
                {data.category}
              </Badge>
              <span className="text-xs font-mono opacity-40 tabular-nums">
                {currentStep} / {totalSteps}
              </span>
            </CardHeader>

            <CardContent className="space-y-10">
              <h2 className="text-2xl md:text-4xl font-bold text-center leading-tight tracking-tight">
                {data.question}
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {data.options.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    className="h-auto py-6 px-6 text-base md:text-lg border-2 border-border/40 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                    onClick={() => onAnswer(option.vibe)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-6 w-full pb-8">
              <div className="w-full space-y-2">
                <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-50 font-semibold">
                  <span>{t("Common.progress_label")}</span>
                  <span className="tabular-nums">
                    {Math.round(progressValue)}%
                  </span>
                </div>
                <Progress value={progressValue} className="h-1" />
              </div>

              <div className="flex justify-start w-full min-h-[40px]">
                {currentStep > 1 && (
                  <Button
                    onClick={onPrev}
                    variant="ghost"
                    className="gap-2 p-0"
                  >
                    {isRTL ? (
                      <ChevronRight className="w-4 h-4" />
                    ) : (
                      <ChevronLeft className="w-4 h-4" />
                    )}
                    {t("Common.prev_btn")}
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
