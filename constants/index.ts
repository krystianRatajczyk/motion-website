import { RxComponent1 } from "react-icons/rx";
import { VscVerified } from "react-icons/vsc";
import { LuFolders } from "react-icons/lu";
import { LiaDiscord } from "react-icons/lia";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";

export const navLinks = [
  { id: 1, label: "Components", href: "/" },
  { id: 2, label: "Pricing", href: "/pricing" },
  { id: 3, label: "Updates", href: "/updates" },
];

export const footerLinks = [
  { id: 1, label: "COMPONENTS", href: "/", icon: RxComponent1 },
  { id: 2, label: "DISCORD", href: "/", icon: LiaDiscord },
  { id: 3, label: "PRICING", href: "/pricing", icon: VscVerified },
  { id: 4, label: "YOUTUBE", href: "/", icon: AiOutlineYoutube },
  { id: 5, label: "UPDATES", href: "/updates", icon: LuFolders },
  { id: 6, label: "INSTAGRAM", href: "/", icon: AiOutlineInstagram },
];

export const updateCards = [
  {
    id: 1,
    image:
      "https://framerusercontent.com/images/5BBPTIfUe45LpfihrmRCxmak1E.jpg?scale-down-to=1024",
    description:
      "Framer offers built-in analytics to help you gain insight on the performance of your website. These analytics are privacy compatible, live, and accurate. However, in order to gain a more detailed overview of activity within your sites, you may want to consider integrating another tool such as Google Analytics and combine the insights together. ",
    title: "Create 3D Site with Spline and React",
    date: "JULY 2022",
    shadows: true,
  },
  {
    id: 2,
    image:
      "https://framerusercontent.com/images/YyNsZXJSARP6Y6rOvtqUgYQf1pc.jpg?scale-down-to=1024",
    description:
      "Design and code an iOS app with Rive animated assets, icon animations, custom layouts and interactions",
    title: "Build an Animated App with Rive and SwiftUI",
    date: "JUNE 2022",
    shadows: false,
    border: "border border-[rgba(209,209,209,0.25)]",
  },
];
