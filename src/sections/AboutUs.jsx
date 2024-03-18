import React from "react";
import Title from "../components/TitleGlobal";

const AboutUs = () => {
  return (
    <div className=" md:hidden text-center py-8 inline-flex  w-full gap-[18px] flex-col section-padding">
      <h1 className="font-bold text-primary text-[50px] text-center font-Aljazeera">
        معلومات عنا
      </h1>
      <p className="text-secondary text-2xl sm:text-[26px] px-5 sm:px-10 text-center font-Aljazeera mt-2 ">
        نصرة عبارة عن مجتمع الكتروني متكون من كل من لديهم هدف نصرة القضية
        الفلسطينية من اجل ايجاد طرق المساهمة في الدعم على حسب مهارات كل فرد
      </p>
    </div>
  );
};

export default AboutUs;
