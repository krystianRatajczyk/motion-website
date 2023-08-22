import React from "react";
import { Circle, Panel } from ".";
import { AiOutlineTrophy } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { zoomIn } from "@/lib/motion";

const Product = () => {
  return (
    <div
      className="overflow-hidden w-full h-auto py-[150px] px-[50px] 
    bg-[#070818] flex items-center gap-[100px] lg:gap-1 justify-center lg:flex-col"
    >
      <div
        className=" flex items-center 
      justify-center flex-col"
      >
        <motion.div
          variants={zoomIn(0.3, 0.4)}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          className="p-2 rounded-[40px] border 
          border-gray-800 z-[100] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-transparent backdrop-blur-xl rounded-br-none"
        >
          <div
            className="relative lg:w-[560px] sm:w-[320px] xsm:w-[280px] w-[380px] 
            object-contain rounded-[40px] aspect-[2/1]"
            style={{
              backgroundImage:
                "url(data:image/jpeg;base64,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)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-4 left-4">
              <span
                className="px-3 py-1 rounded-full bg-[#9b9999] border
              border-gray-400 text-[18px] font-semibold xsm:text-[15px]"
              >
                LIGHT
              </span>
              <span
                className="px-3 py-1 rounded-full bg-[#9b9999] border
              border-gray-400 text-[18px] font-semibold xsm:text-[15px]"
              >
                TRACKING
              </span>
            </div>
            <h3
              className="absolute -bottom-2 right-10 
            rounded-full bg-[#9b9999] px-3 py-1 
            text-[17px] xsm:text-[15px] font-semibold"
            >
              $95
            </h3>
          </div>
          <h2 className="p-4 text-[22px] font-bold">Super Shoes</h2>
        </motion.div>
        <Circle
          padding="p-[30px]"
          className=" w-[330px] -mt-[90px]"
          delay={0.4}
        />
      </div>
      <Panel
        buttonStyles="flex items-center gap-3 justify-center bg-gradient-to-r
        from-[#a76fff] to-[#291cff]
        rounded-full rounded-br-none px-4 py-2 text-black text-[19px] font-semibold"
        iconColor="#2617e2"
        buttonIcon={BsPhoneFill}
        icon={AiOutlineTrophy}
        label="GET THE APP"
        title="Text styles, variants and overlays"
      />
    </div>
  );
};

export default Product;
