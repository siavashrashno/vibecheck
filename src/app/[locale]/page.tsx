"use client";

import { useTranslations } from "next-intl";
import { Header } from "@/components/shared/header";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { Intro } from "@/components/intro";
import { NameStep } from "@/components/name-step";
import { UserContext } from "@/context/user-context";

export default function Home() {
  const [step, setStep] = useState(0);
  const context = useContext(UserContext);
  const username = context?.userName || "";
  const t = useTranslations("HomePage");

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Header />

      <main className="flex-1 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Intro onStart={nextStep} />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="name-step"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 text-center"
            >
              <NameStep
                onNext={nextStep}
                // onBack={prevStep}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h1 className="text-4xl font-black tracking-tighter">
                {username}, let's find your vibe...
              </h1>
              <p className="text-muted-foreground animate-pulse">
                Loading your first question...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
