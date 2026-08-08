import Link from "next/link";

import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";

export async function Hero() {
  const t = await getTranslations("home.hero");
  const locale = await getLocale();

  return (
    <section className="border-b">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border bg-muted/40 px-4 py-2 text-xs font-medium text-muted-foreground sm:text-sm">
          {t("badge")}
        </div>

        {/* Heading */}
        <h1 className="mt-6 max-w-5xl text-3xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-7xl">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {t("description")}
        </p>

        {/* Actions */}
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <Link
            href={`/${locale}/learn`}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto"
            >
              {t("primary")}
            </Button>
          </Link>

          <Link
            href={`/${locale}/tools`}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {t("secondary")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}