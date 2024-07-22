"use client";
import ProfileVisibilitySVG from "@/assets/profileOptions/profileVisibility";
import { useState } from "react";
const ProfileVisibility = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  return (
    <>
      <div className="flex gap-[10px] border-t border-[#efefef] border-solid">
        <div className="py-3 rounded-full">
          <ProfileVisibilitySVG />
        </div>
        <div className="border-b border-[#efefef] border-solid w-full py-3 relative">
          <div className="flex items-center justify-between">
            <div className="leading-[21px] text-[15px]">Profile Visibility</div>

            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-8 h-[19px] bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[calc(100%-1px)] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14.5px] after:w-[14.5px] after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>
          <div className="text-[9px] rounded-full text-[#1A1C1E] bg-[#f0f0f0] w-max px-[6px] py-[2px] mt-[6px]">
            Profile Visibility Within Instructor Search
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileVisibility;
