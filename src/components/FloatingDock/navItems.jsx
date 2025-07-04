import { Home, Info, Rss, BriefcaseBusiness, File, Send, Flower, LaptopMinimal, Images} from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Flower,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: Images,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: LaptopMinimal,
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
