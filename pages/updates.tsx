import { UpdateCard } from "@/components";
import { updateCards } from "@/constants";
import React from "react";
import { BsCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const Updates = () => {
  return (
    <div>
      {updateCards.map((updateCard, index) => {
        return (
          <div
            key={updateCard.id}
            className="w-full px-[50px] sm:px-[20px] py-[100px]"
            style={
              index == 0
                ? {
                    backgroundImage: `url(/wallpaper5.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            {index == 0 ? (
              <div className="w-full flex flex-col gap-10 items-center">
                <motion.div
                  variants={fadeIn(
                    "right",
                    "tween",
                    0.3,
                    0.3,
                  )}
                  viewport={{ once: true }}
                  whileInView={"visible"}
                  initial="hidden"
                  className="flex flex-col items-center gap-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }} //pulsing animation
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 1,
                    }}
                    className="w-[50px] h-[50px] rounded-full bg-transparent border-[4px] border-black p-1"
                  >
                    <div className="w-full h-full rounded-full bg-[rgba(0,0,0,0.25)] border-[4px] border-black"></div>
                  </motion.div>
                  <h2 className="font-bold text-[64px] text-black">Updates</h2>
                  <p className="text-[20px] font-semibold text-black text-center">
                    Stay up-to-date with new courses, tutorials <br /> and
                    livestreams.
                  </p>
                </motion.div>
                <UpdateCard {...updateCard} delay={0.7} />
              </div>
            ) : (
              <div className="w-full flex flex-col items-center">
                <UpdateCard {...updateCard} delay={0.3} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
