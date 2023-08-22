import { fadeIn, zoomIn } from "@/lib/motion";
import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      variants={zoomIn(0.2, 0.1)}
      animate="visible"
      initial="hidden"
      className="flex items-center justify-center 
    w-full h-full px-[20px] py-[200px]"
      style={{
        backgroundImage: `url(/wallpaper6.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 0.3)}
        className="w-[500px] bg-[rgba(0,0,0,0.25)] xsm:px-4 px-6 py-10 backdrop-blur-2xl
      rounded-2xl flex flex-col items-center gap-8 sm:gap-6 border border-[rgba(0,0,0,0.2)]
      shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
      >
        <h2 className="font-bold text-[55px] sm:text-[35px]">Sign up</h2>
        <p className="sm:text-[17px] text-[20px] font-medium text-[rgba(255,255,255,0.5)] text-center">
          Access to 120+ hours of courses, tutorials and livestreams
        </p>
        <form className="flex gap-4 flex-col w-full">
          <motion.input
            variants={fadeIn("down", "tween", 0.1, 0.3)}
            type="text"
            placeholder="Email"
            className="w-full bg-white outline-none border-none p-4 rounded-lg"
          />
          <motion.input
            variants={fadeIn("down", "tween", 0.2, 0.3)}
            type="password"
            placeholder="Password"
            className="w-full bg-white outline-none border-none p-4 rounded-lg"
          />
          <motion.button
            variants={fadeIn("down", "tween", 0.3, 0.3)}
            type="submit"
            className="font-bold w-full text-center py-4 rounded-lg
          bg-gradient-to-r from-[#6345b8] to-[#7b56c5] hover:bg-[rgba(0,0,0,0.5)]"
          >
            Sign Up
          </motion.button>
        </form>
        <p className="sm:text-[13px] text-center font-semibold text-[15px] text-[rgba(255,255,255,0.5)]">
          By clicking on Sign up, you agree to our Terms of service and Privacy
          policy.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Login;
