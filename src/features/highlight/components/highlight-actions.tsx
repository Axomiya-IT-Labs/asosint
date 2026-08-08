import Link from "next/link";

import { Button } from "@/components/ui/button";

type Props = {
  href: string;
  button: string;
};

export function HighlightActions({
  href,
  button,
}: Props) {
  return (
    <div className="shrink-0">
      <Link href={href}>
        <Button size="lg">
          {button}
        </Button>
      </Link>
    </div>
  );
}