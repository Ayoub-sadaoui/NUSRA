import { FaRegShareFromSquare } from "react-icons/fa6";

const WhereCard = ({ image, icon, title }) => {
  return (
    <div className=" group h-60 w-60 relative rounded-[33px] grid place-items-center overflow-hidden">
      <img
        src={image}
        alt={title}
        className="object-cover absolute -z-10 h-60 group-hover:brightness-[0.40]"
      />
      <div className=" invisible  group-hover:visible flex flex-col items-center gap-3 ">
        <img
          src={icon}
          alt={title}
          className={`h-16 w-16 ${icon.includes("youtube") && "h-12"}`}
        />
        <div className="flex items-center gap-2 text-[40px] text-white">
          <FaRegShareFromSquare className=" " />
          <h1 className="font-Aljazeera ">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default WhereCard;
