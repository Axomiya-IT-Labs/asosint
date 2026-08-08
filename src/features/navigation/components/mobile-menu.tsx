"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";

import { siteConfig } from "@/config/site.config";
import { navigation } from "@/data/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

type Props = {
  locale: "en" | "as";
};

export function MobileMenu({ locale }: Props) {
  const items = navigation[locale];

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            className="lg:hidden"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="flex w-[320px] flex-col p-0"
      >
        {/* Header */}
        <SheetHeader className="border-b px-6 py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/logo.svg"
              alt="ASOSINT"
              width={38}
              height={38}
              priority
              className="rounded-lg"
            />

            <div>
              <SheetTitle className="text-left text-lg">
                ASOSINT
              </SheetTitle>

              <p className="text-sm text-muted-foreground">
                Axomiya IT Labs
              </p>
            </div>
          </div>
        </SheetHeader>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <div className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                <span>{item.title}</span>

                <ChevronRight className="size-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="space-y-4 border-t p-4">
          <div className="flex items-center justify-between">
            <LanguageSwitcher locale={locale} />
            <ThemeToggle />
          </div>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Image
              src="/icons/social/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="invert dark:invert-0"
            />

            <span>Star on GitHub</span>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}