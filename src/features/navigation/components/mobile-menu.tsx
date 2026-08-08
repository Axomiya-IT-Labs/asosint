"use client";

import Link from "next/link";
import {Menu} from "lucide-react";

import {Button} from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {navigation} from "@/data/navigation";

type Props = {
  locale: "en" | "as";
};

export function MobileMenu({locale}: Props) {
  const items = navigation[locale];

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon">
            <Menu className="size-5" />
          </Button>
        }
      />

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>ASOSINT</SheetTitle>
        </SheetHeader>

        <nav className="mt-6 flex flex-col gap-2 px-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-muted"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}