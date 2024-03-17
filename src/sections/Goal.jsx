import React from "react";
import CardHow from "../components/CardHow";
import CardHowPc from "../components/CardHowPc";
import { carousel, carouselpc } from "../constants";
const Goal = () => {
  return (
    <section className="flex flex-col items-center  px-10 py-20">
      <h1 className="font-bold text-orange-500 text-[50px] text-center font-Aljazeera">
        كيف تشارك ؟
      </h1>
      <div className="mt-5 w-full md:hidden  carousel carousel-center max-sm:max-w-md py-8 px-20 space-x-10  rounded-box">
        {carousel.map((card, index) => {
          return (
            <div key={index}>
              <CardHow image={card.image} title={card.title} text={card.text} />
            </div>
          );
        })}
      </div>
      <div className=" w-full mt-20 max-md:hidden flex justify-between px-10">
        {carouselpc.map((card, index) => {
          return (
            <div key={index}>
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
