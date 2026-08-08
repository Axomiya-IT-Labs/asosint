"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

type Props = {
  locale: "en" | "as";
  className?: string;
};

export function NavLinks({ locale, className }: Props) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {navigation[locale].map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground",
              active
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}