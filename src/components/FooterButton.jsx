import { MdOutlineContentCopy } from "react-icons/md";
import { useGlobalContext } from "../components/Context";

const FooterButton = ({ text, text2, image }) => {
  const { theme } = useGlobalContext();
  return (
    <button
      className={`${
        theme === "myLight" ? "bg-white " : "border border-black "
      } text-black  group relative  text-xl rounded-lg px-10 py-2 font-Aljazeera flex justify-between mt-5 w-full`}
    >
      <p className="w-20">{text}</p>
      {text2 && (
        <div className=" border-l-black border-l-2 w-[50%] pl-3 flex items-center text-right">
          <MdOutlineContentCopy className="w-4 group-hover:text-orange-500" />
          <p className=" flex text-right group-hover:text-orange-500">
            {text2}
          </p>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          width="300"
          height="130"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
        >
          <rect
            id="rect"
            width="100%"
            height="43"
            x="0"
            y="0"
            rx="12"
            ry="12"
            fill="transparent"
            strokeWidth="4"
            stroke="#F79122"
          />
        </svg>
      </div>
    </button>
  );
};

export default FooterButton;
