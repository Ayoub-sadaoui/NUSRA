import { useGlobalContext } from "./Context";

const InfoContainer = ({ img, info, title, social }) => {
  const { theme } = useGlobalContext();

  return (
    <div className="flex gap-4 justify-end bg--500 items-start lg:w-full md:flex-row md:items-start text-center  ">
      <div className="flex flex-col gap-[10px] lg:border-r-2 lg:border-secondary lg:pr-5 lg:mr-2">
        <h1 className="text-[22px] font-bold font-Almarai text-primary text-right">
          {title}
        </h1>
        {info && (
          <p className="text-2xl font-Almarai font-light pr-5">{info}</p>
        )}
        {social && (
          <div className="grid grid-cols-2 gap-8">
            {social.map((item, index) => {
              return (
                <a href={item.link} key={index}>
                  <div className="flex justify-between gap-1 items-center">
                    <img
                      src={theme === "myLight" ? item.iconLight : item.iconDark}
                      alt={item.text}
                    />
                    <p className="font-Almarai text-[22px]">{item.text}</p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>

      <div>
        <img src={img} alt="logo" className="w-[52px]" />
      </div>
    </div>
  );
};
export default InfoContainer;
