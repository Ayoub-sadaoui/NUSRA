import { inputChange } from "../utils";
import { useGlobalContext } from "../components/Context";

const Input = ({ type, name, placeholder }) => {
  const { updateData } = useGlobalContext();

  const handleChange = (e) => {
    inputChange(e, updateData);
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
      className="input input-bordered  md:input-lg sm:border-x-0 sm:border-t-0  xs:shadow-none sm:rounded-none w-full  text-right sm:border-b-[1px] sm:border-b-secondary"
    />
  );
};
export default Input;
