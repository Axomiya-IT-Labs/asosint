"use client";

import Link from "next/link";
import Image from "next/image";

import {navigation} from "@/data/navigation";

import {MobileMenu} from "./mobile-menu";
import {LanguageSwitcher} from "./language-switcher";

type Props = {
  locale: "en" | "as";
};

export function Navbar({locale}: Props) {
  const items = navigation[locale];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">

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
            className="rounded-md"
            priority
          />

          <div className="leading-none">
            <p className="font-semibold">ASOSINT</p>
            <p className="text-xs text-muted-foreground">
              Axomiya IT Labs
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Language + Theme */}
          <div className="hidden md:block">
            <LanguageSwitcher locale={locale} />
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/Axomiya-IT-Labs/asosint"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <Image
              src="/icons/social/github.svg"
              alt="GitHub"
              width={18}
              height={18}
              className="invert dark:invert-0"
            />
            <span>⭐ Star on GitHub</span>
          </a>

          {/* Mobile */}
          <div className="md:hidden">
            <MobileMenu locale={locale} />
          </div>

        </div>
      </div>
    </header>
  );
}