"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";

type Props = {
  locale: "en" | "as";
};

export function LanguageSwitcher({locale}: Props) {
  const pathname = usePathname();
  const {theme, setTheme} = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fixed: Using setTimeout to avoid synchronous setState warning
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const targetLocale = locale === "en" ? "as" : "en";

  const href = pathname.replace(
    /^\/(en|as)/,
    `/${targetLocale}`
  );

  return (
    <div className="flex items-center gap-2">
      {/* Language */}
      <Link
        href={href}
        className="rounded-md border border-border px-3 py-2 text-sm font-medium transition hover:bg-accent"
      >
        {locale === "en" ? "অসমীয়া" : "English"}
      </Link>

      {/* Theme */}
      <Button
        variant="outline"
        size="icon"
        aria-label="Toggle theme"
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
      >
        {!mounted ? (
          <div className="size-4" />
        ) : theme === "dark" ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )}
      </Button>
    </div>
  );
}