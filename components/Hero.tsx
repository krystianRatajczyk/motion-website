import React from "react";
import { BsArrowRightShort, BsPhoneFill, BsFillPlayFill } from "react-icons/bs";
import { styles } from "@/styles";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/lib/motion";

const Hero = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className="py-[150px] pb-[170px] xsm:px-8 sm:px-[50px] xl:px-[100px] px-[250px] 
      w-full h-full
      flex flex-col gap-5 "
      style={{
        backgroundImage: `url(${
          isMobile ? "/hero-bg-mobile.jpg" : "/hero-bg.jpg"
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={fadeIn("down", "tween", 0.4, 0.3)}
        className="font-semibold border border-gray-600 
      rounded-full w-fit flex items-center gap-2 px-3 py-1 bg-[#27293f] "
      >
        Updated for IOS 16
        <BsArrowRightShort size={25} />
      </motion.div>
      <motion.div
        animate="visible"
        initial="hidden"
        variants={zoomIn(0.5, 0.6)}
        className="max-w-xl lg:max-w-lg"
      >
        <h2 className="xsm:text-4xl lg:text-5xl text-7xl leading-[80px] tracking-wide font-bold text-white">
          Create a 3D background animation
        </h2>
      </motion.div>
      <div className="md:w-full max-w-md lg:w-[300px]">
        <motion.p
          animate="visible"
          initial="hidden"
          variants={zoomIn(0.5, 0.8)}
          className="xsm:text-[15px] lg:text-md text-lg font-medium"
        >
          This is a demo showing a fully responsive page with a Spline 3D asset
          with mouse over interaction. It falls back to an image on smaller
          devices.
        </motion.p>
      </div>
      <motion.div
        animate="visible"
        initial="hidden"
        variants={zoomIn(0.5, 1)}
        className=" w-fit max-w-md gap-2 mt-2 flex justify-between lg:flex-col lg:gap-4"
      >
        <button
          className="group flex items-center gap-4 bg-gradient-to-r from-[#a56dff] to-[#2118ff] 
        rounded-full font-semibold px-7 py-3 rounded-br-none bg-red-200 text-[19px]"
        >
          <div className={`group-hover:rotate-[90deg] ${styles.transition}`}>
            <BsPhoneFill size={25} />
          </div>
          <h2
            className={`group-hover:translate-x-1 group-hover:text-gray-300 ${styles.transition}`}
          >
            GET THE APP
          </h2>
        </button>
        <button
          className="w-fit flex bg-[#070814] items-center gap-4
        rounded-full px-7 font-semibold py-3 rounded-br-none 
        border border-gray-600 text-[19px]"
        >
          <BsFillPlayFill size={25} />
          WATCH VIDEO
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
