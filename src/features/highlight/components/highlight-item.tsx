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
      className={`rounded-2xl border transition-colors ${styles[color]}`}
    >
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-start gap-5">

          <div className="text-4xl leading-none">
            {icon}
          </div>

          <div>

            <h3 className="text-lg font-semibold">
              {title}
            </h3>

            <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
              {text}
            </p>

          </div>

        </div>

        <Link href={href}>

          <Button size="lg">
            {button}
          </Button>

        </Link>

      </div>
    </article>
  );
}