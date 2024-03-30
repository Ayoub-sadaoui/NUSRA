import { MdOutlineContentCopy } from "react-icons/md";
import { useGlobalContext } from "../components/Context";
import { toast } from "react-toastify";

const FooterButton = ({ text, text2, text3 }) => {
  const { theme } = useGlobalContext();
  const clipboard = text3 ? text3 : text;
  const copy = (text) => {
    if (text2) {
      try {
        navigator.clipboard.writeText(clipboard);
        toast.success(` "${clipboard}" coppied`);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <button
      onClick={() => copy(text)}
      className={`
      text-black bg-white group relative  text-xl rounded-lg
       px-5 py-2 h-[43.8px]  font-Aljazeera flex justify-between mt-8 w-full`}
    >
      {text2 ? (
        <div className="flex justify-between w-full ">
          <div className="w-[2px] h-full bg-black absolute top-0 left-[50%] "></div>
          {text3 && (
            <p className="text-[16px] w-20 leading-4 font-[400] ">{text3}</p>
          )}
          <p className="">{text}</p>
          <div className="   flex items-center justify-between w-[110px] text-right ">
            <MdOutlineContentCopy className="w-4 text-xl group-hover:text-primary" />
            <p className=" flex text-right group-hover:text-primary w-fit whitespace-nowrap">
              {text2}
            </p>
          </div>
        </div>
      ) : (
        <p className={`w-20 text-center whitespace-nowrap`}>{text}</p>
      )}
      <div className="absolute top-0 left-0  w-full h-full">
        <svg
          width="300"
          height="130"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
        >
          <rect
            id="rect"
            width="100%"
            height="42"
            x="0"
            y="1.3"
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
