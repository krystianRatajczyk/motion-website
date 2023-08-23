import React from "react";
import { IconType } from "react-icons";
import { FaPaintBrush } from "react-icons/fa";
import { GiSpades } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

interface UpdateCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  border?: string;
  delay: number;
  shadows: boolean;
}

interface FixCardProps
  extends Omit<
    UpdateCardProps,
    "title" | "delay" | "description" | "image" | "date"
  > {
  Icon: IconType;
}

const FixCard: React.FC<FixCardProps> = ({ shadows, Icon, border }) => {
  return (
    <div
      className={`w-full bg-[rgba(0,0,0,0.13)] backdrop-blur-xl flex-1 
  px-4 py-5 rounded-3xl flex flex-col gap-2 
  ${shadows && "shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"} ${
        border || "border border-[rgba(71,71,71,0.1)]"
      } `}
    >
      <Icon size={28} color="#ff8585" />
      <h2 className="text-[20px] font-semibold mt-1">Visual Editor in Xcode</h2>
      <p>Design your layout using the inspector, insert menu and modifiers</p>
    </div>
  );
};

const UpdateCard: React.FC<UpdateCardProps> = ({
  title,
  description,
  image,
  date,
  border,
  shadows,
  delay,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", delay, 0.3)}
      viewport={{ once: true }}
      whileInView={"visible"}
      initial="hidden"
      className={`max-w-[800px] sm:p-4 p-6 rounded-3xl bg-[rgba(0,0,0,0.16)] 
      ${border || "border border-[rgba(14,14,14,0.15)]"} 
    backdrop-blur-xl flex items-center flex-col gap-4 ${
      shadows && "shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
    } `}
    >
      <h2 className="self-start font-bold text-[rgba(231,231,231,0.81)]">
        {date}
      </h2>
      <div className="flex flex-col gap-4">
        <img
          src={image}
          alt=""
          className="w-full rounded-2xl object-cover h-[300px]"
        />
        <h2 className="text-left text-[22px] font-bold">{title}</h2>
        <p className="text-left text-[18px] font-medium mt-3 sm:text-[16px]">{description}</p>
        <div className="w-full h-[1px] bg-[rgba(209,209,209,0.25)] " />
        <h2 className="font-semibold text-[19px]">WHAT'S FIXED</h2>
        <div className="flex items-center gap-6 md:flex-col">
          <FixCard Icon={FaPaintBrush} shadows={shadows} border={border} />
          <FixCard Icon={GiSpades} shadows={shadows} border={border} />
        </div>
      </div>
    </motion.div>
  );
};

export default UpdateCard;
