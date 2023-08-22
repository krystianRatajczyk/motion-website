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
