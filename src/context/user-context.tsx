"use client";

import { createContext, ReactNode, useState } from "react";

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}
