"use client";

import { useTranslations } from "next-intl";
import { Header } from "@/components/shared/header";
import { useContext } from "react";
import { Intro } from "@/components/intro";
import { NameStep } from "@/components/name-step";
import { UserContext } from "@/context/user-context";

export default function Home() {
  const context = useContext(UserContext);

  if (!context) return null;

  const { step, setStep, userName, isMounted } = context;
  const t = useTranslations("HomePage");

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleStart = () => {
    if (userName && userName.trim() !== "") {
      setStep(2);
    } else {
      setStep(1);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <Header />

      <main className="flex-1 flex items-center justify-center p-6">
        {step === 0 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 ease-out">
            <Intro onStart={handleStart} />
          </div>
        )}

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 ease-out space-y-6 text-center">
            <NameStep onNext={nextStep} onBack={prevStep} />
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in zoom-in-95 duration-500 ease-out text-center">
            <h1 className="text-4xl font-black tracking-tighter">
              {userName}, let's find your vibe...
            </h1>
            <p className="text-muted-foreground animate-pulse mt-4">
              Loading your first question...
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
