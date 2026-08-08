import Image from "next/image";
import Link from "next/link";

type Props = {
  locale: "en" | "as";
};

const quickLinks = {
  en: [
    { title: "Learn", href: "/en/learn" },
    { title: "AI", href: "/en/ai" },
    { title: "Tools", href: "/en/tools" },
    { title: "Safety", href: "/en/safety" },
    { title: "Resources", href: "/en/resources" },
    { title: "Community", href: "/en/community" },
    { title: "About", href: "/en/about" },
  ],

  as: [
    { title: "জানক", href: "/as/learn" },
    { title: "AI", href: "/as/ai" },
    { title: "সঁজুলি", href: "/as/tools" },
    { title: "সুৰক্ষা", href: "/as/safety" },
    { title: "সম্পদ", href: "/as/resources" },
    { title: "কমিউনিটি", href: "/as/community" },
    { title: "আমাৰ বিষয়ে", href: "/as/about" },
  ],
} as const;

const socialLinks = [
  {
    name: "Website",
    href: "https://axomiyaitlabs.vercel.app/",
    icon: "/icons/social/website.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Axomiya-IT-Labs",
    icon: "/icons/social/github.svg",
  },
  {
    name: "Telegram",
    href: "https://t.me/AxomiyaITLabs",
    icon: "/icons/social/telegram.svg",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/AxomiyaITLabs",
    icon: "/icons/social/facebook.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/AxomiyaITLabs",
    icon: "/icons/social/instagram.svg",
  },
  {
    name: "X",
    href: "https://x.com/AxomiyaITLabs",
    icon: "/icons/social/x.svg",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@AxomiyaITLabs",
    icon: "/icons/social/youtube.svg",
  },
  {
    name: "Email",
    href: "mailto:axomiyaitlabs@gmail.com",
    icon: "/icons/social/email.svg",
  },
];

export function Footer({ locale }: Props) {
  const links = quickLinks[locale];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}

          <div>

            <Link
              href={`/${locale}`}
              className="flex items-center gap-3"
            >
              <Image
                src="/logos/logo.svg"
                alt="ASOSINT"
                width={44}
                height={44}
              />

              <div>
                <h3 className="font-semibold text-lg">
                  ASOSINT
                </h3>

                <p className="text-sm text-muted-foreground">
                  by Axomiya IT Labs
                </p>
              </div>

            </Link>

            <p className="mt-6 text-sm leading-7 text-muted-foreground">

              {locale === "en"
                ? "An open-source OSINT, AI literacy and digital safety platform built for everyone."
                : "সকলোৰ বাবে এক মুক্ত উৎস OSINT, AI Literacy আৰু Digital Safety Platform।"}

            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="font-semibold mb-4">

              {locale === "en"
                ? "Explore"
                : "এক্সপ্লোৰ কৰক"}

            </h4>

            <nav className="space-y-3">

              {links.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {item.title}
                </Link>

              ))}

            </nav>

          </div>

          {/* Social */}

          <div>

            <h4 className="font-semibold mb-4">

              {locale === "en"
                ? "Community"
                : "কমিউনিটি"}

            </h4>

            <div className="grid grid-cols-4 gap-4">

              {socialLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                >

                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={26}
                    height={26}
                  />

                </a>

              ))}

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-border pt-8 text-center text-sm text-muted-foreground">

          © {new Date().getFullYear()} ASOSINT • Axomiya IT Labs • Open Source

        </div>

      </div>
    </footer>
  );
}