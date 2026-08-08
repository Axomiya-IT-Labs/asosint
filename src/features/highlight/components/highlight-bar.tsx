import { getTranslations } from "next-intl/server";

import { highlights } from "../data";
import { HighlightItem } from "./highlight-item";

export async function HighlightBar() {
  const t = await getTranslations("highlight");

  return (
    <section
      aria-labelledby="security-highlights"
      className="border-t border-b bg-muted/20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <h2
            id="security-highlights"
            className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
          >
            {t("heading")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Cards */}
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