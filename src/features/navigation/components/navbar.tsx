"use client";

import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site.config";
import { navigation } from "@/data/navigation";

import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

type Props = {
  locale: "en" | "as";
};

export function Navbar({ locale }: Props) {
  const items = navigation[locale];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-16 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu locale={locale} />
          </div>

          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3"
          >
            <Image
              src="/logos/logo.svg"
              alt="ASOSINT"
              width={36}
              height={36}
              priority
              className="rounded-lg"
            />

            <div className="leading-none">
              <h1 className="text-base font-bold md:text-lg">
                ASOSINT
              </h1>

              <p className="hidden text-xs text-muted-foreground md:block">
                Axomiya IT Labs
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* Desktop only */}
          <div className="hidden lg:block">
            <LanguageSwitcher locale={locale} />
          </div>

          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="hidden lg:flex h-10 items-center justify-center gap-2 rounded-lg border px-3 transition-colors hover:bg-muted"
          >
            <Image
              src="/icons/social/github.svg"
              alt="GitHub"
              width={18}
              height={18}
              className="invert dark:invert-0"
            />

            <span className="text-sm font-medium">
              Star on GitHub
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}