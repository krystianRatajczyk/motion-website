import { navLinks } from "@/constants";
import { styles } from "@/styles";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="relative w-full bg-[#000000] flex justify-between items-center py-3 px-10">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={fadeIn("right", "", 0, 0.3)}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="z-[101] absolute left-10 -bottom-[170px] p-4 py-6 bg-[rgba(0,0,0,0.5)]
         flex flex-col items-start gap-2 backdrop-blur-lg rounded-xl shadow-2xl"
          >
            {navLinks.map((navLink, index) => {
              return (
                <Link
                  onClick={() => setIsOpen(false)}
                  href={navLink.href}
                  key={navLink.id}
                  className={` font-medium  
                 pr-4 w-full text-left ${
                   index < navLinks.length - 1 &&
                   "pb-2 border-b border-b-gray-400"
                 } ${styles.transition}`}
                >
                  {navLink.label.toUpperCase()}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="sm:block hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!isOpen ? <HiOutlineMenuAlt1 size={30} /> : <RxCross2 size={30} />}
      </div>
      <h2
        className={`sm:hidden block font-bold hover:text-gray-300 ${styles.transition}`}
      >
        LOGO
      </h2>
      <div className="flex gap-[100px] md:gap-[40px] sm:hidden font-manrope">
        {navLinks.map((navLink) => {
          return (
            <Link
              href={navLink.href}
              key={navLink.id}
              className={`rounded-lg font-medium border border-[#000000]
                 hover:border-[#333333]
                 px-4 py-2 ${styles.transition}`}
            >
              {navLink.label}
            </Link>
          );
        })}
      </div>
      <div>
        <Link
          href="/login"
          className={`font-semibold text-[16px] py-2 
          px-4 border border-blue-700 hover:border-white 
           rounded-full rounded-br-none ${styles.transition}`}
        >
          SIGN UP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
