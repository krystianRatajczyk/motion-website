import { planBenefits, plans } from "@/constants";
import React from "react";
import { AiOutlineCreditCard, AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { BiMedal } from "react-icons/bi";
import { RxSwitch } from "react-icons/rx";
import { IoMdCloudy } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { PriceCard } from "@/components";

const Pricing = () => {
  return (
    <div
      className="w-full xsm:px-[20px] sm:[30px] px-[50px] py-[100px]"
      style={{
        backgroundImage: `url(/wallpaper4.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center gap-4 flex-col">
        <motion.div
          variants={fadeIn("down", "tween", 0.3, 0.3)}
          viewport={{ once: true }}
          whileInView="visible"
          initial="hidden"
          className="flex items-center gap-4 flex-col"
        >
          <h2 className="text-[64px] text-black font-bold">Pricing</h2>
          <p className="text-black font-semibold text-[20px] text-center">
            Launch a site for free. Choose a site plan to <br />
            unlock more features.
          </p>
          <div className="w-full h-[1px] bg-[rgba(124,124,124,0.35)]" />
        </motion.div>
        <div className="flex sm:w-full gap-8 flex-row xl:flex-col items-center">
          {plans.map((plan, index) => {
            return <PriceCard {...plan} delay={(index + 3) * 0.2} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
