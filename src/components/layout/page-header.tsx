import { Navbar } from "@/features/navigation/components/navbar";

type PageHeaderProps = {
  locale: "en" | "as";
};

export function PageHeader({ locale }: PageHeaderProps) {
  return <Navbar locale={locale} />;
}