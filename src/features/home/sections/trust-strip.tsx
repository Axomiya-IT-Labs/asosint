import {
  Brain,
  ShieldAlert,
  UserRoundSearch,
  ScanSearch,
} from "lucide-react";

import { getTranslations } from "next-intl/server";

const ICONS = [
  Brain,
  ShieldAlert,
  UserRoundSearch,
  ScanSearch,
];

export async function TrustStrip() {
  const t = await getTranslations("home.trust");

  const items = [
    {
      icon: ICONS[0],
      title: t("ai.title"),
      description: t("ai.description"),
    },
    {
      icon: ICONS[1],
      title: t("deepfake.title"),
      description: t("deepfake.description"),
    },
    {
      icon: ICONS[2],
      title: t("engineering.title"),
      description: t("engineering.description"),
    },
    {
      icon: ICONS[3],
      title: t("osint.title"),
      description: t("osint.description"),
    },
  ];

  return (
    <section className="border-y bg-muted/20">
      <div className="container mx-auto px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("heading")}
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border bg-background/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold leading-7">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}