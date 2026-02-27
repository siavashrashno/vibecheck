"use client";

import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { useContext } from "react";
import { UserContext } from "@/context/user-context";

interface NameStepProps {
  onNext: () => void;
  onBack: () => void;
}

type FormInputs = {
  firstName: string;
};

export const NameStep = ({ onNext, onBack }: NameStepProps) => {
  const context = useContext(UserContext);
  if (!context) return null;
  const { userName, setUserName } = context;

  const t = useTranslations("NameStep");
  const common = useTranslations("Common");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      firstName: userName,
    },
  });

  const onSubmit = (data: FormInputs) => {
    setUserName(data.firstName);
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl mx-auto space-y-12"
    >
      <div className="space-y-6 text-center">
        <h2 className="text-2xl md:text-3xl max-w-4xl font-light tracking-tighter">
          {t("title")}
        </h2>
        <p className="text-xs font-bold text-muted-foreground">
          {t("description")}
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Input
            {...register("firstName", {
              required: t("error_required"),
              minLength: { value: 2, message: t("error_min") },
            })}
            placeholder={t("placeholder")}
            className={`text-center h-12  text-sm bg-transparent border-t-0 border-x-0 border-b-2 rounded-none focus-visible:ring-0 transition-all ${
              errors.firstName
                ? "border-red-500 focus-visible:border-red-500"
                : "border-muted-foreground/30 focus-visible:border-primary"
            }`}
            // autoFocus
          />

          {errors.firstName && (
            <p className="text-red-500 text-xs mt-2  absolute w-full">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 mt-8">
          <Button
            size="lg"
            type="button"
            variant="ghost"
            onClick={onBack}
            className="flex-1 h-12 font-medium"
          >
            {common("prev_btn")}
          </Button>
          <Button size="lg" type="submit" className="flex-1 h-12 font-medium">
            {common("continue")}
          </Button>
        </div>
      </div>
    </form>
  );
};
