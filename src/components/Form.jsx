import { useGlobalContext } from "../components/Context";
import Input from "./Input";
import { inputChange, sendDEmail } from "../utils";
import { useRef, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const Form = () => {
  const { data, updateData, setData } = useGlobalContext();
  const [sending, setSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const input = useRef("");

  const handleTextArea = (e) => {
    inputChange(e, updateData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendDEmail(data, sending, setSending, isSent, setIsSent, setData);
  };

  return (
    <form
      className="flex flex-col gap-[23px]  max-sm:w-full max-lg:mt-10 "
      onSubmit={handleSubmit}
    >
      <div className="flex max-sm:gap-[23px] lg:gap-x-[18%] max-l w-full sm:justify-between flex-col sm:flex-row-reverse  ">
        <Input type="text" name="from_name" placeholder="الاسم " />
        <Input type="text" name="phone" placeholder=" اللقب" />
      </div>
      <Input type="email" name="to_name" placeholder="  الايمايل" />

      <div className="relative group">
        <label
          className={` max-sm:hidden absolute max-sm:right-3 right-0 top-1 max-sm:text-primary-content  text-xl  font-[300]
         max-sm:group-hover:hidden max-sm:top-3 font-Almarai
         max-sm:text-xl max-sm:font-normal  max-sm:font-Aljazeera
         ${
           !input.current.value
             ? "sm:group-focus-within:text-[12px] sm:group-focus-within:text-primary sm:group-focus-within:-translate-y-4 duration-[300ms]"
             : "sm:text-[12px] sm:text-primary sm:-translate-y-4 duration-[300ms]"
         }`}
        >
          الرسالة
        </label>
        <textarea
          className="sm:placeholder-transparent py-4 max-sm:p-4 max-sm:h-12  max-sm:rounded-lg font-Almarai
           outline-none  max-sm:min-h-[187px] min-h-[120px] text-right sm:border-x-0 sm:border-t-0  xs:shadow-none sm:rounded-none w-full
            sm:border-b-[1.5px] sm:border-secondary max-sm:border-primary-content max-sm:border-[1px] max-sm bg-transparent"
          // value={data.name}
          name="message"
          onChange={handleTextArea}
          placeholder="الرسالة"
          ref={input}
        ></textarea>
      </div>
      <button className="btn lg:hidden btn-primary text-white mt-10 hover:text-white">
        {sending ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : (
          "ارسال"
        )}
      </button>
      <button
        className="  max-lg:hidden lg:block px-8 py-2 rounded-lg border-2 border-primary gap-x-10
       hover:outline-none mt-10 text-primary text-2xl flex items-center justify-center hover:text-white hover:bg-primary w-fit self-end "
      >
        {sending ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : (
          <span className="flex items-center gap-1">
            <span>&#9993; </span>
            <p>ارسال</p>
          </span>
        )}
      </button>
    </form>
  );
};
export default Form;
