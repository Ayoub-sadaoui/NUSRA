import { inputChange } from "../utils";
import { useGlobalContext } from "../components/Context";
import { useRef, useState } from "react";

const Input = ({ type, name, placeholder }) => {
  const { updateData, data } = useGlobalContext();
  const area = useRef("");
  const handleChange = (e) => {
    inputChange(e, updateData);
  };
  return (
    <div className="relative md:max-lg:min-w-[280px] lg:w-full sm:mb-10 group">
      <label
        htmlFor={name}
        className={`max-sm:hidden absolute max-sm:right-3 right-0 bottom-5 font-Almarai sm:font-[380]
        max-sm:top-3 max-sm:group-hover:hidden group 
        max-sm:text-xl max-sm:font-normal max-sm:text-primary-content  max-sm:font-Aljazeera transform duration-[300ms]
        ${
          !area.current.value
            ? "sm:group-focus-within:text-[12px] sm:text-xl sm:group-focus-within:text-primary  sm:group-focus-within:-translate-y-4  "
            : "sm:text-[12px] sm:text-primary sm:-translate-y-4  "
        }`}
      >
        {placeholder}
      </label>
      <input
        type={type}
        onChange={handleChange}
        name={name}
        ref={area}
        placeholder={placeholder}
        // value={data.name}
        className="max-sm:p-4 max-sm:border-[1px] max-sm:h-[52px] sm:h-10  max-sm:border-primary-content max-sm:rounded-lg
         outline-none sm:bg-transparent text-neutral-content px-0 bg-red-500 sm:placeholder-transparent	
         sm: sm:border-x-0 sm:border-t-0 sm:border-b-[1.5px] sm:border-b-secondary
         xs:shadow-none sm:rounded-none w-full  text-right text-[15px] font-Almarai font-[200] bg-transparent "
      />
    </div>
  );
};
export default Input;
