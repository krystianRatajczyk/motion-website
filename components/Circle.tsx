import React from "react";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motion";

interface CircleProps {
  className: string;
  padding: string;
  delay: number;
}

const Circle: React.FC<CircleProps> = ({ className, padding, delay }) => {
  return (
    <motion.div
      variants={scaleIn(delay)}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      className={`overflow-visible aspect-[1/1] ${className} ${padding}
    rounded-full shadow-[0_35px_60px_-5px_rgba(0,0,0,0.3)] bg-transparent border border-gray-600 `}
    >
      <div
        className={`w-full h-full rounded-full -z-[100] bg-gradient-to-r
        from-[#251733] to-[#141542] ${padding}`}
      >
        <div
          className={`w-full h-full rounded-full -z-[100] bg-gradient-to-r
        from-[#3a244e] to-[#21205f] ${padding}`}
        >
          <div
            className={`w-full h-full -z-[100] bg-[#ca3939] rounded-full
          border-2 border-white ${padding}`}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Circle;
