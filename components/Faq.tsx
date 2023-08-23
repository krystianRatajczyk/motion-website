import { FAQ } from "@/constants";
import { Disclosure } from "@headlessui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/lib/motion";

const Faq = () => {
  return (
    <div
      className="py-[80px] px-[45px] sm:px-[30px] xsm:px-[20px] lg:px-[50px] bg-black 
    flex flex-col items-center"
    >
      <h2 className="text-white text-[55px] font-bold">FAQ</h2>
      <motion.div
        variants={fadeIn("down", "tween", 0.7, .3)}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3"
      >
        {FAQ.map((faq, index) => (
          <Disclosure
            defaultOpen={index == 0}
            as="div"
            className="mt-5 w-[800px] lg:w-full py-4 px-6 rounded-3xl
      border border-[rgba(109,109,109,0.25)]"
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full">
                  <div
                    className="text-left flex justify-between w-full items-center text-[24px]
          font-semibold"
                  >
                    {faq.question}
                    <div
                      className={`self-start transition duration-300 ${
                        open && " rotate-[45deg]"
                      }`}
                    >
                      <AiOutlinePlus size={30} color="#fff" />
                    </div>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="text-white font-medium">
                  <div className="w-full my-3 h-[1px] bg-[rgba(141,138,138,0.25)]" />
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </motion.div>
    </div>
  );
};

export default Faq;
