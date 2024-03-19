import { useGlobalContext } from "../components/Context";
import Input from "./Input";
import { inputChange, sendDEmail } from "../utils";
import { useState } from "react";
import { setDefaultNamespace } from "i18next";
const Form = () => {
  const { data, updateData, setData } = useGlobalContext();
  const [sending, setSending] = useState(false);

  const handleTextArea = (e) => {
    inputChange(e, updateData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submited");
    sendDEmail(data, sending, setSending, setData);
  };
  return (
    <form
      className="flex flex-col gap-[23px] my-[22px]"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-[23px] flex-col sm:flex-row ">
        <Input type="text" name="from_name" placeholder="الاسم الكامل" />
        <Input type="text" name="phone" placeholder="رقم الهاتف" />
      </div>
      <Input
        type="email"
        name="to_name"
        placeholder="عنوان البريد الالكتروني"
      />

      <textarea
        className="textarea textarea-bordered min-h-[100px] text-right sm:border-x-0 sm:border-t-0  xs:shadow-none sm:rounded-none w-full   sm:border-b-[1px] sm:border-b-secondary"
        placeholder="الرسالة"
        // value={data.name}
        name="message"
        onChange={handleTextArea}
      ></textarea>
      <button className="btn lg:hidden btn-primary text-white mt-10 hover:text-white">
        {sending ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : (
          "ارسال"
        )}
      </button>
      <button className="btn max-lg:hidden lg:block px-8 btn-primary btn-outline mt-10 hover:text-white w-fit self-end ">
        {sending ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : (
          "ارسال"
        )}
      </button>
    </form>
  );
};
export default Form;
