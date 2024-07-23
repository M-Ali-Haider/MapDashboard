"use client";
import Image from "next/image";
import nextConfig from "../../../../next.config";
import OnlineStatusSVG from "@/assets/Chatbox/online";
import { useState } from "react";

const ChatBoxHeader = () => {
  const [isOnline, setIsOnline] = useState(true);
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bg-[#CECECE] flex items-center gap-3 px-6 py-4">
        <div className="h-[48px] w-[48px] relative rounded-full overflow-hidden border border-black border-solid">
          <Image
            src={`${nextConfig.basePath}/chatbox.jpg`}
            fill
            alt="employee image"
            className="object-center"
          />
        </div>
        <div className="flex flex-col text-white">
          <div className="font-semibold text-[15px] leading-[18px]">
            Christiana Adams
          </div>
          <div className="flex items-center gap-1 mt-[2px]">
            <span className="text-xs leading-[14px]">Online</span>
            <div>
              <OnlineStatusSVG fill={`${isOnline ? "#0AFF22" : "red"}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBoxHeader;
