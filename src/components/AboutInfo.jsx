import InfoContainer from "./InfoContainer";

import { contactInfo } from "../constants";
const AboutInfo = () => {
  return (
    <section
      className="max-md:hidden lg:w-[50%] lg:pr-[9%]   sm:flex  lg:flex-col flex-wrap
     justify-end lg:justify-evenly  items-start gap-[26px] mt-0"
    >
      {contactInfo.map((item, indx) => {
        return <InfoContainer key={indx} {...item} />;
      })}
    </section>
  );
};
export default AboutInfo;
