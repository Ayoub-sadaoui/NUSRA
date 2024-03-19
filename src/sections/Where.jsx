import React from "react";
import WhereCard from "../components/WhereCard";
import { socialMedia } from "../constants";

const Where = () => {
  return (
    <div className="px-20 mt-20">
      <h1 className="font-bold text-primary text-[50px] text-center md:text-right md:mr-10 flex-end font-Aljazeera">
        كيف تشارك ؟
      </h1>
      <div className="flex flex-row-reverse flex-wrap gap-10 animation- justify-around bg-200 mt-20">
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
