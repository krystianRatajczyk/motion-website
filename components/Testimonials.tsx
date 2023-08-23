import { testimonials } from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const Testimonials = () => {
  return (
    <div className="py-[100px] sm:py-[70px] sm:px-[25px] px-[50px] w-full bg-[#440219] flex items-center flex-col">
      <motion.div
        variants={fadeIn("down", "tween", 0.45, 0.3)}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        <h2 className="md:text-[34px] text-[50px] text-white font-bold text-center">
          How students learned <br /> from our courses
        </h2>
        <p className="text-[rgba(255,255,255,0.75)] font-semibold text-[16px] text-center">
          See what people have learned and built by taking courses from
          Design+Code.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 grid-rows-2 gap-7 md:grid-rows-4 md:grid-cols-1 mt-10">
        {testimonials.map((testimonial, index) => {
          return (
            <motion.div
              variants={fadeIn(
                (index + 1) % 2 == 1 ? "right" : "left",
                "tween",
                (index + 1) * 0.3,
                0.3
              )}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              key={testimonial.id}
              className="flex-col rounded-[30px] bg-transparent
           border border-[rgba(255,255,255,0.07)] md:max-w-full max-w-[385px] flex 
           items-start p-5 gap-3"
            >
              <img
                src={testimonial.image}
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <h2 className="font-bold text-[22px] ">{testimonial.name}</h2>
              <p className="font-semibold text-[16px]">{testimonial.job}</p>
              <p className="w-full text-[15px] font-medium">
                {testimonial.opinion}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
