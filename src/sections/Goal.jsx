import React from "react";
import CardHow from "../components/CardHow";
import CardHowPc from "../components/CardHowPc";
import { carousel, carouselpc } from "../constants";
const Goal = () => {
  return (
    <section className="flex flex-col max-md:items-center md:imtes-end md:px-20  py-20">
      <h1 className="font-bold text-primary text-[50px] text-center md:text-right md:mr-10 flex-end font-Aljazeera">
        كيف تشارك ؟
      </h1>
      <div className="mt-5 w-full md:hidden  carousel carousel-center max-sm:max-w-md py-8 px-10 space-x-10  rounded-box">
        {carousel.map((card, index) => {
          return (
            <div key={index}>
              <CardHow image={card.image} title={card.title} text={card.text} />
            </div>
          );
        })}
      </div>
      <div
        className=" w-full mt-20 max-md:hidden  gap-12 justify-between 
      carousel carousel-center max-w-full p-4 space-x-4  rounded-box"
      >
        {carouselpc.map((card, index) => {
          return (
            <div key={index} className="shadow-lg rounded-[40px]">
              <CardHowPc
                image={card.image}
                title={card.title}
                text={card.text}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Goal;
