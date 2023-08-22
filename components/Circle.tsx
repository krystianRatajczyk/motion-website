import React from "react";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motion";

const Circle = () => {
  return (
    <motion.div
      variants={scaleIn(1.6)}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      className="overflow-visible absolute -top-[55px] -left-9 
      -z-[100] w-[125%] 
      sm:w-[110%] sm:-top-[30px] sm:-left-4
      xsm:w-[102%]  xsm:-top-[17px] xsm:-left-[3px]
      aspect-[1/1] 
    rounded-full bg-transparent border border-gray-600 p-6"
    >
      <div
        className="w-full h-full rounded-full -z-[100] bg-gradient-to-r
        from-[#251733] to-[#141542] p-6"
      >
        <div
          className="w-full h-full rounded-full -z-[100] bg-gradient-to-r
        from-[#3a244e] to-[#21205f] p-6"
        >
          <div
            className="w-full h-full -z-[100] bg-[#ca3939] rounded-full
          border-2 border-white"
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Circle;
