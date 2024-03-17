import React from "react";

const CardHow = ({ image, title, text }) => {
  return (
    <div className="bg-orange-500 rounded-[33px] pb-4 flex flex-col  relative w-[260px] h-[321px] ">
      <img src={image} className="h-[153px]  p-2 pb-4" />
      <div className="flex flex-col gap-4 px-2 mb-4 text-white">
        <h1 className="font-bold text-center text-2xl">{title}</h1>
        <p className="text-lg text-center leading-6">{text}</p>
      </div>
    </div>
  );
};

export default CardHow;
