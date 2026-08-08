"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fixed: Using setTimeout to avoid synchronous setState warning
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-lg"
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      {!mounted ? (
        <div className="h-4 w-4" />
      ) : theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}