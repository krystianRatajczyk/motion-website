import { footerLinks } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer
      className={`bg-[#070818]  w-full  flex 
    items-center justify-center px-16 md:px-6 py-[100px] `}
    >
      <div className=" flex items-center justify-center flex-col">
        <div
          className="flex flex-wrap justify-center gap-[50px] items-center mb-7 
        "
        >
          <div
            className="grid grid-cols-2 grid-rows-3 gap-x-[60px] sm:gap-x-[50px]
          xsm:gap-x-[20px] gap-y-4 "
          >
            {footerLinks.map((footerLink) => {
              return (
                <div
                  className="flex gap-3 sm:gap-1 items-center "
                  key={footerLink.id}
                >
                  <footerLink.icon size={30} color="#b1b2b7" />
                  <h2 className="text-[#b1b2b7] font-bold text-[17px] sm:text-[14px]">
                    {footerLink.label}
                  </h2>
                </div>
              );
            })}
          </div>
          <div
            className="flex flex-col gap-4 
          p-5 bg-[#04050e] rounded-2xl border border-gray-700"
          >
            <h1 className="font-semibold text-white xsm:text-[14px] text-[16px]">
              SUBSCRIBE TO OUR NEWSLETTER
            </h1>
            <div className="w-full flex gap-2">
              <input
                type="text"
                placeholder="example@example.com"
                className="flex-1 rounded-lg border-none outline-none 
                placholder:text-gray-700 text-black px-4 sm:px-1  py-2"
              />
              <button
                className="whitespace-nowrap overflow-hidden bg-[#cd4342] text-[17px] sm:text-[14px] font-bold rounded-lg 
              px-2 py-1 "
              >
                Sign up
              </button>
            </div>
            <p className="text-[14px] text-[#7c7d81] font-semibold">
              Product updates, news and promotions. No spam ever.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col w-fit">
          <div className="w-[280px] h-[1px] bg-gray-700 mb-7" />
          <div className="flex gap-10">
            <p className="text-[#60606a]">Terms</p>
            <p className="text-[#60606a]">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
