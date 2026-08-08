import Link from "next/link";

import { Button } from "@/components/ui/button";

type Props = {
  icon: string;
  title: string;
  text: string;
  button: string;
  href: string;
  color: "amber" | "red";
};

export function HighlightItem({
  icon,
  title,
  text,
  button,
  href,
  color,
}: Props) {
  const styles = {
    amber:
      "border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/10",
    red:
      "border-red-500/30 bg-red-500/5 hover:bg-red-500/10",
  };

  return (
    <article
      className={`rounded-2xl border transition-all duration-300 hover:shadow-lg ${styles[color]}`}
    >
      <div className="flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        {/* Left */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-3xl shadow-sm sm:h-14 sm:w-14 sm:text-4xl">
            {icon}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold sm:text-xl">
              {title}
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              {text}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-auto">
          <Link
            href={href}
            className="block w-full lg:w-auto"
          >
            <Button
              size="lg"
              className="w-full lg:w-auto"
            >
              {button}
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}