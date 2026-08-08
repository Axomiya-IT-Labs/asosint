"use client";

import {ThemeProvider} from "next-themes";
import {Toaster} from "@/components/ui/sonner";

type Props = {
  children: React.ReactNode;
};

export function Providers({children}: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
      <Toaster richColors position="bottom-right" />
    </ThemeProvider>
  );
}