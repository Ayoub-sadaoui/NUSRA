import React, { useState } from "react";
import { useAsyncError } from "react-router-dom";
import { useGlobalContext } from "./Context";

const CardHowPc = ({ image, title, text }) => {
  //   const { animation, toggle } = useGlobalContext();
  const [show, setShow] = useState(true);
  return (
    <div
      onClick={() => setShow(!show)}
      className="rounded-[40px]  grid place-items-center  relative w-[320px] h-[500px] overflow-hidden "
    >
      <img
        src={image}
        className="object-cover h-full w-full  brightness-[0.8] "
      />

      <h1
        className={` text-white font-Aljazeera px-10 text-[42px] w-full text-center transition-opacity absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
         ${show ? "block" : "hidden"}`}
      >
        {title}
      </h1>

      <h1
        className={`  text-center text-3xl  text-white font-Aljazeera absolute transition-all ${
          show ? "-top-40" : "top-10"
        } `}
      >
        {title}
      </h1>
      <p
        className={`text-lg text-center leading-6 absolute bg-gradient-to-t from-black to-transparent text-white px-5 pb-12 pt-7 ${
          show ? "-bottom-40" : "bottom-0 transition-all"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default CardHowPc;
