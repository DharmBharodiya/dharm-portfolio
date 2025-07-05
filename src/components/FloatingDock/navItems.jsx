import { Home, Info, Rss, BriefcaseBusiness, File, Send, Flower, LaptopMinimal, Images } from "lucide-react";

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
		href: "https://drive.google.com/file/d/1OLCHGoYwxc2WpO2fiy2NKv-_jP_PjoX9/view?usp=sharing",
		icon: File,
		target: "_blank",
		rel: "noopener noreferrer",
	},
	{
		label: "Socials",
		href: "/socials",
		icon: Send,
	},
];

export default navItems;
