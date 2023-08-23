import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RxSwitch } from "react-icons/rx";
import { planBenefits } from "@/constants";
import { BiMedal } from "react-icons/bi";

interface PriceCardProps {
  topIcon: IconType;
  price: string;
  planName: string;
  switch: boolean;
  buttonIcon: IconType;
  buttonLabel: string;
  color: string;
  delay: number;
}

const PriceCard: React.FC<PriceCardProps> = ({
  topIcon: Icon,
  price,
  planName,
  switch: isSwitch,
  buttonIcon: ButtonIcon,
  buttonLabel,
  color,
  delay,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "tween", delay, 0.3)}
      viewport={{ once: true }}
      whileInView="visible"
      initial="hidden"
      style={{ backgroundColor: color }}
      className={`${
        color == "blur" && "bg-[rgba(0,0,0,0.25)] backdrop-blur-xl"
      } min-w-[380px] sm:min-w-full ${
        planName == "BASIC" ? "py-[60px] pt-[30px]" : "py-6"
      } rounded-3xl flex flex-col
      items-center gap-3 ${
        buttonLabel == "SUBSCRIBE" ? "text-white" : "text-black"
      } h-fit`}
    >
      <div className="flex items-center flex-col gap-2">
        {planName == "BASIC" ? (
          <>
            <div
              className="flex gap-2 px-3 items-center rounded-full
              border border-[rgba(153,152,152,0.15)] text-[16px] font-semibold bg-[rgba(129,129,129,0.25)]"
            >
              <BiMedal size={18} color="#fff" />
              POPULAR
            </div>
            <div className="w-[120%] mb-2 h-[1px] bg-[rgba(0,0,0,0.25)]" />
            <div
              className="w-[25px] h-[25px] rounded-full bg-[rgba(0,0,0,0.25)]
              border-[2px] border-white"
            ></div>
          </>
        ) : (
          <Icon size={35} color={planName == "FREE" ? "#000" : "#fff"} />
        )}
        <p className="font-semibold text-[20px]">{planName} PLAN</p>
      </div>

      <h2 className="text-[52px] font-bold">{price}</h2>
      <div className="flex flex-col items-start gap-2">
        {!isSwitch ? (
          <div
            className="flex items-center gap-1 px-2 py-1 rounded-full
  border-[rgba(0,0,0,0.25)] border self-center
   bg-[#c38e8e] w-fit"
          >
            Up to 3 projects
            <AiOutlineInfoCircle size={18} />
          </div>
        ) : (
          <div
            className="flex items-center gap-2 px-2 py-1 rounded-full
      border-[rgba(0,0,0,0.25)] border self-center
         w-fit bg-[rgba(151,150,150,0.29)]"
          >
            Billed yearly
            <RxSwitch size={18} />
          </div>
        )}
        <div className="flex flex-col gap-2 ">
          {planBenefits.map((benefit) => {
            return (
              <div
                key={benefit.id}
                className={`text-[17px] font-medium
        flex items-center gap-2 ${
          buttonLabel == "SUBSCRIBE" ? "text-white" : "text-[rgba(0,0,0,0.65)]"
        } `}
              >
                <benefit.icon
                  size={25}
                  color={buttonLabel == "SUBSCRIBE" ? "#fff" : "#000"}
                />
                {benefit.benefit}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[50%] h-[1px] bg-[rgba(0,0,0,0.25)]" />
      <div
        className={`flex items-center gap-4 
  rounded-full rounded-br-none w-[70%] h-[50px] justify-center ${
    buttonLabel == "SUBSCRIBE"
      ? "bg-white text-black font-semibold"
      : "bg-black text-white"
  }`}
      >
        <ButtonIcon
          size={25}
          color={buttonLabel == "SUBSCRIBE" ? "#000" : "#fff"}
        />
        {buttonLabel}
      </div>
    </motion.div>
  );
};

export default PriceCard;
