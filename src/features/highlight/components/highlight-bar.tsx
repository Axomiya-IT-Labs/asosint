import { getTranslations } from "next-intl/server";

import { highlights } from "../data";

import { HighlightItem } from "./highlight-item";

export async function HighlightBar() {
  const t = await getTranslations("highlight");

  return (
    <section
      aria-labelledby="security-highlights"
      className="border-t bg-muted/30"
    >
      <div className="container py-16">

        <div className="mb-10 text-center">

          <h2
            id="security-highlights"
            className="text-3xl font-bold tracking-tight"
          >
            {t("heading")}
          </h2>

          <p className="mt-3 mx-auto max-w-2xl text-muted-foreground">
            {t("description")}
          </p>

        </div>

        <div className="space-y-5">

          {highlights.map((item) => (
            <HighlightItem
              key={item.id}
              icon={item.icon}
              color={item.color}
              href={item.href}
              title={t(`${item.id}.title`)}
              text={t(`${item.id}.text`)}
              button={t(`${item.id}.button`)}
            />
          ))}

        </div>

      </div>
    </section>
  );
}