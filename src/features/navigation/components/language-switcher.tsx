"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {
  locale: "en" | "as";
};

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();

  const targetLocale = locale === "en" ? "as" : "en";

  const href = pathname.replace(
    /^\/(en|as)/,
    `/${targetLocale}`
  );

  return (
    <Link
      href={href}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-medium transition-all hover:bg-muted"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />

      <span className="hidden sm:inline">
        {locale === "en" ? "অসমীয়া" : "English"}
      </span>
    </Link>
  );
}