import { footerLinks, footerLinks2, socialMedia } from "../constants";
import { copyicon, orangeLogo } from "../assets";
import FooterLinks from "../components/FooterLinks";
import FooterButton from "../components/FooterButton";
import { useGlobalContext } from "../components/Context";

const Footer = () => {
  const { theme } = useGlobalContext();

  return (
    <footer className="mt-20">
      <div
        className={`w-full  bg-neutral-content   flex flex-col items-center py-8 sm:hidden `}
      >
        <div>
          <img src={orangeLogo} className="h-[90px]" />
        </div>
        <ul>
          {footerLinks.map((link, index) => {
            return (
              <li key={index} className="text-neutral text-center mt-2">
                <a href={link.href}>{link.label}</a>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-center items-center gap-3 mt-4">
          {socialMedia.map((social, index) => {
            return (
              <li key={index} className="text-neutral text-center mt-2">
                <a href={social.link}>
                  <img src={social.icon} className="w-6" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="max-lg:px-14 bg-black  w-full flex flex-col max-sm:hidden items-center py-14">
        <div className="w-full  flex flex-wrap gap-y-20 flex-row-reverse justify-between items-start  px-5 max-sm:hidden">
          <div className="flex flex-col  gap-10 items-center border-l-primary border-l-4 pl-10">
            <img src={orangeLogo} alt="" />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfWK_KXrB1bNITfYQ06ZB-UoTAyR3gxe35XRmg-zPZzQt0hDQ/viewform">
              <button className="border-4 active:scale-95 duration-100 w-fit border-primary font-Aljazeera text-primary hover:text-neutral hover:border-neutral px-8 py-1 rounded-2xl lg:text-[40px] text-3xl ">
                التسجيل
              </button>
            </a>
          </div>
          <ul className="flex flex-col justify-center items-left gap-3 mt-4 px-10">
            <h2 className="lg:text-[45px] text-3xl font-Aljazeera text-neutral text-center">
              تابعنا
            </h2>
            <div className="mt-5 gap-3 flex flex-col">
              {socialMedia.map((social, index) => {
                return (
                  <li key={index} className="text-neutral  text-right mt-2">
                    <a href={social.link}>
                      <FooterLinks
                        text={social.text}
                        icon={
                          theme === "myDark"
                            ? social.iconLight
                            : social.iconDark
                        }
                      />
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>
          <ul className="flex flex-col justify-right items-center gap-3 mt-4 px-10">
            <h2 className="lg:text-[45px] text-3xl font-Aljazeera text-neutral text-center">
              تصفح
            </h2>
            <div className="mt-5 gap-3 flex flex-col items-end">
              {footerLinks2.map((link, index) => {
                return (
                  <li key={index} className="text-neutral  text-right mt-2 ">
                    <a href={link.href}>
                      <FooterLinks text={link.label} />
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>
          <div className="px-5 max-sm:hidden">
            <h2 className="lg:text-[45px] text-3xl font-Aljazeera text-center text-neutral">
              تواصل معنا
            </h2>
            <div className="mt-10">
              <div className="flex gap-2">
                <a href="#contact">
                  <FooterButton text="تواصل معنا" />
                </a>
                <FooterButton text="إتصل بنا" />
              </div>
              <FooterButton text="0780502844" text2="إنسخ الرقم" />
              <FooterButton text="nusra.online" text2="إنسخ الإيميل" />
            </div>
          </div>
        </div>
        <div className="px-5 hidden lg:hidden w-[376px]">
          <h2 className="lg:text-[45px] text-3xl font-Aljazeera text-center text-neutral">
            تواصل معنا
          </h2>
          <div className="mt-10">
            <div className="flex gap-2">
              <FooterButton text="تواصل معنا" />
              <FooterButton text="إتصل بنا" />
            </div>
            <FooterButton text="0780502844" text2="إنسخ الرقم" />
            <FooterButton text="nusra.online" text2="إنسخ الإيميل" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
