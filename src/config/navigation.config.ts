import type { LucideIcon } from "lucide-react";

import {
  BookOpen,
  Bot,
  Shield,
  Search,
  Wrench,
  FolderOpen,
  Users,
  Info,
} from "lucide-react";

export interface NavigationItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navigation: NavigationItem[] = [
  {
    href: "/",
    label: "Home",
    icon: Search,
  },

  {
    href: "/learn",
    label: "Learn",
    icon: BookOpen,
  },

  {
    href: "/ai",
    label: "AI",
    icon: Bot,
  },

  {
    href: "/tools",
    label: "Tools",
    icon: Wrench,
  },

  {
    href: "/resources",
    label: "Resources",
    icon: FolderOpen,
  },

  {
    href: "/safety",
    label: "Safety",
    icon: Shield,
  },

  {
    href: "/community",
    label: "Community",
    icon: Users,
  },

  {
    href: "/about",
    label: "About",
    icon: Info,
  },
];