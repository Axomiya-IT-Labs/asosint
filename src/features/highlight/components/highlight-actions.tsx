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
    <div className="w-full shrink-0 lg:w-auto">
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
  );
}