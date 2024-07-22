import FormHeaderSVG from "@/assets/FormHeaderSVG";

const FormHeader = () => {
  return (
    <>
      <div className="w-full bg-black h-14 hidden items-center justify-center md:flex">
        <div>
          <FormHeaderSVG width={"299px"} height={"58px"} />
        </div>
      </div>
    </>
  );
};

export default FormHeader;
