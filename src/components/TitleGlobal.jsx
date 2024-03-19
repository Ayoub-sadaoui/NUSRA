const Title = ({ text }) => {
  return (
    <div>
      <h1 className=" text-primary font-semibold  text-[27px] md:text-[40px] xl:text-[80px] leading-[30.47px] md:text-right">
        {text}
      </h1>
    </div>
  );
};
export default Title;
