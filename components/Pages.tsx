import React from "react";
import { Panel } from ".";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const Pages = () => {
  return (
    <div
      className="py-[150px] px-[50px] sm:px-[25px] flex gap-[120px] lg:gap-[50px] lg:flex-col
      items-center justify-center"
      style={{
        backgroundImage: `url(/wallpaper2.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Panel
        buttonStyles="flex items-center gap-4 bg-black 
        rounded-full rounded-br-none px-4 py-2 text-[19px] font-semibold"
        buttonIcon={AiOutlineCloudDownload}
        iconColor="#fff"
        label="DOWNLOAD"
        title="Multiple pages with unique content"
        icon={BsCircle}
      />
      <div className="flex flex-col gap-10 items-center justify-center">
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 0.3)}
          whileInView={"visible"}
          viewport={{ once: true }}
          initial="hidden"
          className="flex flex-col gap-3 p-7 max-w-[300px] items-center justify-center 
      backdrop-blur-xl bg-[rgba(0,0,0,0.1)] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
      rounded-[40px] border border-[rgba(0,0,0,0.25)]"
        >
          <h2 className="text-[20px] font-bold">Sit less. You'll go far</h2>
          <img src="/sit.jpg" alt="" />
          <p className="text-white text-left font-semibold">
            Replace your regular desk at work with a standing desk to reduce the
            amount of sedentary time in your day.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("down", "tween", 0.6, 0.3)}
          whileInView={"visible"}
          viewport={{ once: true }}
          initial="hidden"
          className="flex items-center gap-3  flex-col max-w-[300px] rounded-[40px] p-7 
        bg-gradient-to-br from-[#fe9151] to-[#fb2f2e] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        >
          <h2 className="text-[20px] font-bold ">Get maximum workout</h2>
          <h3 className="text-black font-semibold text-[17px]">SWIMMING</h3>
          <div
            className="bg-transparent border-[15px] border-white 
          rounded-full w-[160px] aspect-[1/1]"
          />
          <p className="text-black text-left font-semibold">
            Burn calories the easy way and get tracking
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pages;
