export const navigation = {
  en: [
    {
      title: "Learn",
      href: "/en/learn",
    },
    {
      title: "AI",
      href: "/en/ai",
    },
    {
      title: "Tools",
      href: "/en/tools",
    },
    {
      title: "Safety",
      href: "/en/safety",
    },
    {
      title: "Resources",
      href: "/en/resources",
    },
    {
      title: "Community",
      href: "/en/community",
    },
    {
      title: "About",
      href: "/en/about",
    },
  ],

  as: [
    {
      title: "জানক",
      href: "/as/learn",
    },
    {
      title: "AI",
      href: "/as/ai",
    },
    {
      title: "সঁজুলি",
      href: "/as/tools",
    },
    {
      title: "সুৰক্ষা",
      href: "/as/safety",
    },
    {
      title: "সম্পদ",
      href: "/as/resources",
    },
    {
      title: "কমিউনিটি",
      href: "/as/community",
    },
    {
      title: "আমাৰ বিষয়ে",
      href: "/as/about",
    },
  ],
} as const;

export type Locale = keyof typeof navigation;