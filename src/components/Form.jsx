import { useGlobalContext } from "../components/Context";
import Input from "./Input";
import { inputChange, sendDEmail } from "../utils";
import { useState } from "react";
const Form = () => {
  const { data, updateData } = useGlobalContext();
  const [sending, setSending] = useState(false);

  const handleTextArea = (e) => {
    inputChange(e, updateData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submited");
    sendDEmail(data, sending, setSending);
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
        name="message"
        onChange={handleTextArea}
      ></textarea>
      <button className="btn lg:hidden btn-primary text-white">ارسال </button>
      <button className="btn hidden lg:block btn-primary btn-outline  text-white w-fit self-end ">
        ارسال{" "}
      </button>
    </form>
  );
};
export default Form;
