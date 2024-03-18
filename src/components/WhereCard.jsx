import React from "react";

const WhereCard = ({ image, icon, title }) => {
  return (
    <div className="h-60 w-60 relative rounded-2xl grid place-items-center">
      <img src={image} alt={title} className="object-cover absolute -z-10" />
      <div className="flex flex-col gap-5">
        <img src={icon} alt={title} className="h-16" />
        <h1 className="font-Aljazeera text-2xl">{title}</h1>
      </div>
    </div>
  );
};

export default WhereCard;
