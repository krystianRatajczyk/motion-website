import { RxComponent1 } from "react-icons/rx";
import { VscVerified } from "react-icons/vsc";
import { LuFolders } from "react-icons/lu";
import { LiaDiscord } from "react-icons/lia";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiFillLock,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { BsFillPencilFill, BsGlobe2 } from "react-icons/bs";
import { PiBooks, PiPersonSimpleRunBold } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import { BiMedal } from "react-icons/bi";
import { IoMdCloudy } from "react-icons/io";

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

export const planBenefits = [
  { id: 1, icon: BsGlobe2, benefit: "Custom domain" },
  { id: 2, icon: AiFillLock, benefit: "Password protect" },
  { id: 3, icon: PiBooks, benefit: "10GB bandwidth" },
  { id: 4, icon: GoStack, benefit: "1,000 CMS items" },
  { id: 5, icon: PiPersonSimpleRunBold, benefit: "10,000 visitors" },
];

export const plans = [
  {
    id: 1,
    topIcon: BsFillPencilFill,
    price: "$15/mo",
    planName: "FREE",
    switch: false,
    buttonIcon: BsFillPencilFill,
    buttonLabel: "TRY FOR FREE",
    color: "#dfa7a0",
  },
  {
    id: 2,
    topIcon: BiMedal,
    price: "$30/mo",
    planName: "BASIC",
    switch: true,
    buttonIcon: AiOutlineCreditCard,
    buttonLabel: "SUBSCRIBE",
    color: "blur",
  },
  {
    id: 3,
    topIcon: IoMdCloudy,
    price: "$45/mo",
    planName: "PRO",
    switch: true,
    buttonIcon: AiOutlineCreditCard,
    buttonLabel: "SUBSCRIBE",
    color: "#180d04",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Retta Pfannerstill",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    job: "MOBILE DEVELOPER",
    opinion:
      "Your first book was extremely helpful for me because, like yourself, I also started off as a pixel-pusher and I liked to make things look pretty without thinking too much of how design really functions. Your book has really helped me to fine-tune my skills in design!",
  },
  {
    id: 2,
    name: "Vicky Kub",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    job: "FOUNDER OF ABDZ",
    opinion:
      "My first iOS app is available on the AppStore. I literally didn’t know anything about SwiftUI (still not much) and in probably 4 weeks was able to recreate my android app for iOS. Highly recommend MengTo videos!",
  },
  {
    id: 3,
    name: "Presley Gislason",
    image:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    job: "UX DESIGNER AT GOOGLE",
    opinion:
      "I found and bought Design+Code by Meng To which takes you through each step of the process from design to code to app store submission.",
  },
  {
    id: 4,
    name: "Rigoberto Heaney",
    image:
      "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    job: "DESIGNER AT BLUSH",
    opinion:
      "Meng To's book totally changed my design workflow. It even inspired me to start design workshops and YouTube tutorials.",
  },
];

export const FAQ = [
  {
    id: 1,
    question: "How are paid plans billed?",
    answer:
      "Paid plans are billed both at a Site and Team level. Both subscriptions are always linked to the email of the purchaser. In order to get extra features and faster loading time to your site, you can acquire any of our site plans. In the moment of purchasing the first site plan within a team, a Team account will be added automatically so editors will be charged at a team level.",
  },
  {
    id: 2,
    question: "Do you accept Paypal?",
    answer:
      "Yes, we accept PayPal for the one-year plan only. Purchasing through PayPal will not renew your subscription at the end of your one-year period.",
  },
  {
    id: 3,
    question: "How do I pay?",
    answer:
      "You can purchase a Pro subscription anytime with a credit card. Or, you can purchase an annual plan with PayPal that will not auto-renew.",
  },
  {
    id: 4,
    question: "Can I download the content?",
    answer: "Yes, you can download the videos, source files, ePub files and resources such as icons, illustrations, mockups, etc. These come with your subscription, even the monthly plan.",
  },
];
