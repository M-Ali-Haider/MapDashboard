import CheckBox from "@/components/Checkbox";
import ForgotPassword from "./forgotPassword";

const RememberAndForget = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between mt-3">
        <CheckBox
          label={"Remember Me"}
          inputClassName={"h-[15px] w-[15px] rounded-[3px]"}
          labelClassName={"text-xs"}
          container={"gap-[6px]"}
        />
        <ForgotPassword />
      </div>
    </>
  );
};

export default RememberAndForget;
