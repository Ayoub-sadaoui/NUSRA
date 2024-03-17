import InfoContainer from "./InfoContainer";

import { contactInfo } from "../constants";
const AboutInfo = () => {
  return (
    <section className="hidden  sm:flex  lg:flex-col flex-wrap justify-end md:justify-evenly  items-start gap-[26px] ">
      {contactInfo.map((item, indx) => {
        return (
          <InfoContainer
            key={indx}
            img={item.img}
            title={item.title}
            info={item.info}
          />
        );
      })}
    </section>
  );
};
export default AboutInfo;
