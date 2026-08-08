import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
} from "next-intl/server";

import { routing } from "@/i18n/routing";

import { Providers } from "@/components/providers/providers";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/features/navigation/components/navbar";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });

  return {
    title: t("title"),
    description: t("description"),

    metadataBase: new URL("https://asosint.vercel.app"),

    alternates: {
      canonical: `https://asosint.vercel.app/${locale}`,
      languages: {
        en: "https://asosint.vercel.app/en",
        as: "https://asosint.vercel.app/as",
      },
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://asosint.vercel.app/${locale}`,
      siteName: "ASOSINT",
      locale: locale === "en" ? "en_IN" : "as_IN",
      type: "website",

      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "ASOSINT",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/twitter-image.png"],
    },

    icons: {
      icon: [
        "/icons/brand/favicon.ico",
        "/icons/brand/favicon-32.png",
        "/icons/brand/favicon-16.png",
      ],
      apple: "/icons/brand/apple-touch-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "as")) {
    notFound();
  }

  const messages = await getMessages({
    locale,
  });

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <Providers>
        <div className="flex min-h-screen flex-col">
          <Navbar locale={locale as "en" | "as"} />

          <main className="flex-1">
            {children}
          </main>

          <Footer locale={locale as "en" | "as"} />
        </div>
      </Providers>
    </NextIntlClientProvider>
  );
}