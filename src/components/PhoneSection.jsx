import { phone } from "../assets";
const PhoneSection = () => {
  return (
    <div className="flex items-center gap-2.5 ">
      <img src={phone} alt="phone" />
      <div>
        <p className="text-xl">0780502844 / 0794515934</p>
      </div>
    </div>
  );
};
export default PhoneSection;
