import React from "react";
import WhereCard from "../components/WhereCard";
import { socialMedia } from "../constants";

const Where = () => {
  return (
    <div className="px-20 mt-16 pb-16 ">
      <h1 className="font-bold text-secondary text-[80px] text-center md:text-right md:mr-10 flex-end font-Aljazeera">
        أين
        <span className="text-primary"> تجدنا؟</span>
      </h1>
      <div className="flex flex-row-reverse flex-wrap gap-10 animation- justify-around bg-200 mt-8">
        {socialMedia.map((social, index) => {
          const { image, text, icon, iconDark } = social;
          return (
            <div key={index}>
              <WhereCard image={image} icon={iconDark} title={text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Where;
