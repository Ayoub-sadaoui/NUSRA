import { useGlobalContext } from "./Context";

const InfoContainer = ({ img, info, title, social }) => {
  const { theme } = useGlobalContext();

  return (
    <div className="flex gap-4 justify-end lg:items-center lg:w-full  md:flex-col-reverse lg:flex-row  md:items-end    text-center  ">
      <div className="flex flex-col gap-[14px]">
        <h1 className="text-[22px] font-bold text-right">{title}</h1>
        {info && <p className="text-2xl font-light">{info}</p>}
        {social && (
          <div className="grid grid-cols-2 gap-8">
            {social.map((item) => {
              return (
                <div className="flex justify-between items-center">
                  <img
                    src={theme === "myLight" ? item.iconLight : item.iconDark}
                    alt={item.text}
                  />
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <span className="w-[2px]  h-full bg-secondary "></span>
      <div>
        <img src={img} alt="logo" className="w-[52px ]" />
      </div>
    </div>
  );
};
export default InfoContainer;
