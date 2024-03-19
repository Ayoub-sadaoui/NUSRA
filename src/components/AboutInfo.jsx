import InfoContainer from "./InfoContainer";

import { contactInfo } from "../constants";
const AboutInfo = () => {
  return (
    <section className="max-md:hidden  sm:flex  lg:flex-col flex-wrap justify-end md:justify-evenly  items-start gap-[26px] mt-20">
      {contactInfo.map((item, indx) => {
        return <InfoContainer key={indx} {...item} />;
      })}
    </section>
  );
};
export default AboutInfo;
