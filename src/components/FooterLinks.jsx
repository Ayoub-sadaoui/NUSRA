import React from "react";

const FooterLinks = ({ text, icon }) => {
  console.log(icon);
  return (
    <div className="group flex justify-between items-center gap-4 relative">
      <p className="font-Aljazeera lg:text-2xl text-xl text-center font-thin">
        {text}
      </p>
      {icon && (
        <img
          src={icon}
          className={`text-white   ${icon.includes("youtube") ? "h-6" : "h-8"}`}
        />
      )}
      <div className="absolute -bottom-2 right-0 w-0 h-[3px] rounded-xl  text-right bg-white duration-300 group-hover:w-full "></div>
    </div>
  );
};

export default FooterLinks;
