import { Home, Info, Rss, BriefcaseBusiness, File, Send } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: Rss,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: BriefcaseBusiness,
  },
  {
    label: "Resume",
    href: "/resume",
    icon: File,
  },
  {
    label: "Connect",
    href: "/connect",
    icon: Send,
  },
];

export default navItems;
