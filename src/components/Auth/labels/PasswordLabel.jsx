"use client";
import { useEffect, useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
const PasswordLabel = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={label}
          className="flex select-none items-center justify-between py-1 px-1 font-bold"
        >
          <span className="leading-6 text-black dark:text-[#f8f8f2] capitalize text-sm md:text-base">
            {label}
          </span>
        </label>
        <div className="relative w-full flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            name={label}
            className="w-full placeholder:text-xs md:placeholder:text-sm placeholder-[#999999]  shrink h-12 px-4 leading-6 border-[#cccccc] border-2 dark:border-[#51535a] rounded-lg bg-transparent dark:text-[#f8f8f2]"
          />
          <div className="absolute right-5 cursor-pointer">
            {showPassword ? (
              <BsEye onClick={handleShowPassword} />
            ) : (
              <BsEyeSlash onClick={handleShowPassword} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordLabel;
