const InfoContainer = ({ img, info, title }) => {
  return (
    <div className="flex gap-4 justify-end lg:items-center lg:w-full  md:flex-col-reverse lg:flex-row  md:items-end    text-center  ">
      <div className="flex flex-col gap-[14px]">
        <h1 className="text-[22px] font-bold text-right">{title}</h1>
        <p className="text-2xl font-light">{info}</p>
      </div>
      <span className="w-[2px]  h-full bg-secondary "></span>
      <div>
        <img src={img} alt="logo" className="w-[52px ]" />
      </div>
    </div>
  );
};
export default InfoContainer;
