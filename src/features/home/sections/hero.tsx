import Link from "next/link";

import {getLocale, getTranslations} from "next-intl/server";

import {Button} from "@/components/ui/button";

export async function Hero() {
  const t = await getTranslations("home.hero");
  const locale = await getLocale();

  return (
    <section className="border-b">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium">
          {t("badge")}
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
          {t("title")}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
          {t("description")}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href={`/${locale}/learn`}>
            <Button>
              {t("primary")}
            </Button>
          </Link>

          <Link href={`/${locale}/tools`}>
            <Button variant="outline">
              {t("secondary")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}