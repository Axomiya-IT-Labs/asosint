"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SearchButton() {
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Search"
    >
      <Search className="h-4 w-4" />
    </Button>
  );
}