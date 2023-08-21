import React from "react";

interface ComponentLayoutProps {
  title: string;
  absolute?: Boolean;
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({
  title,
  absolute,
}) => {
  return (
    <div
      className={`backdrop-blur-xl ${absolute && "absolute bottom-0"} 
  border border-gray-600 rounded-3xl py-3 px-5 w-full`}
    >
      <div
        className="absolute right-4 top-4 font-semibold text-[17px]
      rounded-full border border-white py-1 px-4 rounded-br-none"
      >
        VISIT
      </div>
      <h2 className="font-semibold text-[18px]">{title}</h2>
      <div className="mt-3">
        <h3 className="font-semibold text-gray-600">30 mins ago</h3>
        <div className="flex justify-between w-full">
          <h3 className="font-semibold text-[#a3a4a7] text-[15px]">
            3,054 STEPS
          </h3>
          <h3 className="font-semibold text-[#a3a4a7] text-[15px]">
            3% HIGHER
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ComponentLayout;
