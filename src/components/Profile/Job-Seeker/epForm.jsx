"use client";
import { useSelector } from "react-redux";
import EPLabel from "./epLabel";

const EditProfileForm = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const elLabelLongLabel = isSidebarOpen ? "min-w-[315px]" : "min-w-[350px]";
  return (
    <>
      <form className="">
        <h3 className="text-[22px] font-bold mt-7">Generals</h3>
        <div className="flex flex-wrap gap-4">
          <EPLabel
            label={"first name"}
            type={"text"}
            placeholder={"Enter your name"}
            styles={elLabelLongLabel}
          />
          <EPLabel
            label={"last name"}
            type={"text"}
            placeholder={"Type here"}
            styles={elLabelLongLabel}
          />
          <EPLabel
            label={"password"}
            type={"password"}
            placeholder={"Enter your password"}
            styles={elLabelLongLabel}
          />
          <EPLabel
            label={"Re-Type Password"}
            type={"password"}
            placeholder={"Enter your password"}
            styles={elLabelLongLabel}
          />
        </div>
        <h3 className="text-[22px] font-bold mt-7">Contact</h3>
        <div className="flex flex-wrap gap-4">
          <EPLabel
            label={"mobile"}
            type={"number"}
            placeholder={"Enter your mobile number"}
            styles={elLabelLongLabel}
          />
          <EPLabel
            label={"email"}
            type={"text"}
            placeholder={"Enter your Email"}
            styles={elLabelLongLabel}
          />
        </div>
        <div className="grid grid-cols-3 gap-12">
          <EPLabel
            label={"address"}
            type={"number"}
            placeholder={"Enter your address"}
            styles={""}
          />
          <EPLabel
            label={"city"}
            type={"text"}
            placeholder={"Enter your city"}
            styles={""}
          />
          <EPLabel
            label={"country"}
            type={"number"}
            placeholder={"Enter your country"}
            styles={""}
          />
        </div>
        <h3 className="text-[22px] font-bold mt-7">About Me</h3>
        <textarea
          type="text"
          className="p-3 min-h-[136px] max-h-[136px] mt-3 border-2 border-[#999999] border-solid w-full rounded-lg resize-none focus:outline-none"
        />
      </form>
    </>
  );
};

export default EditProfileForm;
