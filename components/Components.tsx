import React from "react";
import { BsRocketFill } from "react-icons/bs";
import { RiFoldersLine } from "react-icons/ri";
import { Circle, ComponentLayout } from ".";
import { FaRunning } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/motion";

const Components = () => {
  return (
    <div
      className="py-[170px]  w-full flex 
        items-center justify-center gap-10 flex-wrap px-10 sm:px-7"
      style={{
        backgroundImage: `url(/wallpaper1.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex gap-10 flex-wrap items-center justify-center">
        <div className="flex flex-col gap-10">
          <motion.div
            className="relative drop-shadow-xl"
            variants={fadeIn("down", "tween", 0.2, 0.3)}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            initial="hidden"
          >
            <img
              src="https://framerusercontent.com/images/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg?scale-down-to=512"
              alt=""
              className="w-[300px] h-[300px] object-cover rounded-3xl rounded-tl-none"
            />
            <ComponentLayout title="LAC SUPERIUR" absolute />
          </motion.div>
          <motion.div
            className="relative drop-shadow-xl"
            variants={fadeIn("down", "tween", 0.4, 0.3)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="visible"
            initial="hidden"
          >
            <img
              src="https://framerusercontent.com/images/4NA343NtGp3lILMlDYHRW8h9MVg.jpg?scale-down-to=512"
              alt=""
              className="w-[300px] h-fit object-cover rounded-3xl rounded-tr-none"
            />
            <ComponentLayout title="SUIT" absolute />
          </motion.div>
        </div>
        <div className="flex flex-col gap-10 mt-7 relative z-[100]">
          <Circle />
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 0.3)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="visible"
            initial="hidden"
            className="backdrop-blur-xl relative border border-gray-600 w-[300px] 
            rounded-3xl rounded-tl-none drop-shadow-xl"
          >
            <h2 className="text-2xl font-bold p-4 pt-5 flex items-center gap-3 justify-center w-full">
              <FaRunning size={30} absolute />
              Close Your Rings
            </h2>
            <p className=" mx-5 pb-5">
              Close your Move ring by hitting your personal goal of active
              calories burned.
            </p>
            <ComponentLayout title="NETHERLANDS" />
          </motion.div>
          <motion.div
            className="w-[300px] drop-shadow-xl"
            variants={fadeIn("down", "tween", 0.8, 0.3)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="visible"
            initial="hidden"
          >
            <ComponentLayout title="MONTREAL" />
          </motion.div>
          <motion.div
            className="relative drop-shadow-xl"
            variants={fadeIn("down", "tween", 1, 0.3)}
            viewport={{ once: true, amount: 0.25 }}
            whileInView="visible"
            initial="hidden"
          >
            <img
              src="https://framerusercontent.com/images/of7bqAE8DmXlaFfWLukXXbupvlg.jpg?scale-down-to=512"
              alt=""
              className="w-[300px] h-[300px] object-cover rounded-3xl rounded-tl-none"
            />
            <ComponentLayout title="SAN FRANCISCO" absolute />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={textVariant(0.3)}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-[400px] flex items-center flex-col gap-5"
      >
        <BsRocketFill size={55} color="#ee4444" />
        <h2 className="font-bold text-[50px] text-center xsm:text-[35px]">
          Many types of components to customize
        </h2>
        <p className="font-semibold text-center text-[18px] xsm:text-[20px] text-[rgba(255,255,255,0.7)]">
          Build a website without writing a single line of code using Framer
          components and customizing the entire content
        </p>
        <button
          className="flex items-center gap-4 bg-black 
        rounded-full rounded-br-none px-4 py-2 text-[19px] font-semibold"
        >
          <RiFoldersLine size={25} />
          LEARN MORE
        </button>
        <div className="bg-gray-600 h-[1px] w-1/2" />
        <div className="text-[#b2abcd] text-[15px] font-semibold text-center">
          Grow your business, reach new audiences, and hit your goals with
          integrations.
        </div>
      </motion.div>
    </div>
  );
};

export default Components;
