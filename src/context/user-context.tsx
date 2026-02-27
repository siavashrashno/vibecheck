"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, ReactNode } from "react";

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useLocalStorage("currentUserName", "");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}
