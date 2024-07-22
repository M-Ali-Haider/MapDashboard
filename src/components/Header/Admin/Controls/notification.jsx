"use client";
import NotificationSVG from "@/assets/Header/notification";
import { useState } from "react";
const Notification = () => {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)} className="relative">
        <div className="absolute flex h-[12px] w-[12px] text-[8px] right-[1.75px] top-[1.25px] items-center justify-center bg-black md:right-[1.5px] text-white md:text-[10px] rounded-full  md:h-[15px] md:w-[15px]">
          {counter}
        </div>
        <NotificationSVG className="w-7 h-7 md:w-[30px] md:h-[30px]" />
      </button>
    </>
  );
};

export default Notification;
