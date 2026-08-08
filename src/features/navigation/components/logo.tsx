import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  locale: "en" | "as";
  showText?: boolean;
  className?: string;
};

export function Logo({
  locale,
  showText = true,
  className = "",
}: LogoProps) {
  return (
    <Link
      href={`/${locale}`}
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="ASOSINT Home"
    >
      <Image
        src="/logos/logo.svg"
        alt="ASOSINT Logo"
        width={42}
        height={42}
        priority
      />

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-lg font-bold tracking-tight">
            ASOSINT
          </span>

          <span className="text-muted-foreground text-xs">
            {locale === "as"
              ? "অসমীয়া OSINT শিক্ষাৰ প্লেটফৰ্ম"
              : "Assamese OSINT Knowledge Platform"}
          </span>
        </div>
      )}
    </Link>
  );
}