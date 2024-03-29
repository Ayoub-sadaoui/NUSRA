import Title from "../components/TitleGlobal";
import PhoneSection from "../components/PhoneSection";
import ContactForm from "../components/ContactForm";
import AboutInfo from "../components/AboutInfo";
import { Footer } from "../sections";
const Contact = () => {
  return (
    <>
      <section
        className="text-center inline-flex flex-col gap-[18px]  sm:w-full
       pt-[100px] md:px-20 sm:pt-[130px] lg:pt-[160px] section-padding  max-sm:items-center max-sm:w-full "
      >
        <Title text="تواصل معنا" />
        <p className=" text-secondary font-normal text-xl sm:hidden">
          :للمزيد من المعلومات لاتتردد في التواصل معنا عبر الأرقام التالية
        </p>
        <div className="grid place-items-center sm:hidden">
          <PhoneSection />
        </div>
        <div className="flex flex-col max-sm:w-full md:items-center lg:items-start lg:flex-row justify-between md:pt-8 gap-8 ">
          <AboutInfo />
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Contact;
