"use client";

import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { LocaleSwitcher } from "./locale-switcher";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto h-16 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <div className="w-px h-4 bg-border mx-1" />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};