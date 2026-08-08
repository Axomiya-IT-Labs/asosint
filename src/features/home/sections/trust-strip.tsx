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
    <section className="border-t bg-muted/30 py-24">
      <div className="container">

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("heading")}
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-xl border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="mb-5 h-10 w-10 text-primary" />

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

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