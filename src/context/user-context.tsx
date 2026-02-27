"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, ReactNode } from "react";

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isMounted: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useLocalStorage("currentUserName", "");
  const [step, setStep, isMounted] = useLocalStorage("currentStep", 0);

  return (
    <UserContext.Provider
      value={{ userName, setUserName, step, setStep, isMounted }}
    >
      {children}
    </UserContext.Provider>
  );
}
