import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/motion";
import { BsRocketFill } from "react-icons/bs";
import { RiFoldersLine } from "react-icons/ri";
import { IconType } from "react-icons";

interface PanelProps {
  buttonStyles: string;
  buttonIcon: IconType;
  iconColor: string;
  label: string;
  title: string;
  icon: IconType;
}

const Panel: React.FC<PanelProps> = ({
  buttonStyles,
  iconColor,
  buttonIcon: ButtonIcon,
  label,
  title,
  icon: Icon,
}) => {
  return (
    <motion.div
      variants={textVariant(0.3)}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-[400px] lg:max-w-[450px] flex items-center flex-col gap-5"
    >
      <Icon size={55} color={iconColor} />
      <h2 className="font-bold text-[50px] text-center xsm:text-[35px]">
        {title}
      </h2>
      <p className="font-semibold text-center text-[18px] xsm:text-[20px] text-[rgba(255,255,255,0.7)]">
        Build a website without writing a single line of code using Framer
        components and customizing the entire content
      </p>
      <button className={buttonStyles}>
        <ButtonIcon size={25} />
        {label}
      </button>
      <div className="bg-gray-600 h-[1px] w-1/2" />
      <div className="text-[#b2abcd] text-[15px] font-semibold text-center">
        Grow your business, reach new audiences, and hit your goals with
        integrations.
      </div>
    </motion.div>
  );
};

export default Panel;
