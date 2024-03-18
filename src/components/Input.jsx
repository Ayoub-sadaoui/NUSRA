import { inputChange } from "../utils";
import { useGlobalContext } from "../components/Context";
import { data } from "autoprefixer";

const Input = ({ type, name, placeholder }) => {
  const { updateData, data } = useGlobalContext();

  const handleChange = (e) => {
    inputChange(e, updateData);
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
      // value={data.name}
      className="input input-bordered  text-neutral-content md:input-lg sm:border-x-0 sm:border-t-0  xs:shadow-none sm:rounded-none w-full  text-right sm:border-b-[1px] sm:border-b-secondary"
    />
  );
};
export default Input;
