import React from "react";

const FooterLinks = ({ text, icon }) => {
  return (
    <div className="group flex justify-between items-center gap-4 relative">
      <p className="font-Aljazeera lg:text-2xl text-xl text-center">{text}</p>
      {icon && <img src={icon} className="text-white  " />}
      <div className="absolute -bottom-2 right-0 w-0 h-[3px] rounded-xl  text-right bg-neutral duration-300 group-hover:w-full "></div>
    </div>
  );
};

export default FooterLinks;
