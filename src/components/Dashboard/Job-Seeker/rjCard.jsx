"use client";
import Image from "next/image";
import nextConfig from "../../../../next.config";
import SavedSVG from "@/assets/saved";
import { useState } from "react";
import UnSavedSVG from "@/assets/unsaved";
import { useSelector } from "react-redux";

const RecommendedJobsCard = ({ item }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const [isSaved, setIsSaved] = useState(true);
  return (
    <>
      <div className={`flex ${isSidebarOpen ? "gap-[2px]" : "gap-4"}`}>
        <div className="flex-1">
          <div className="relative w-20 h-16">
            <Image
              src={`${nextConfig.basePath}/recommendedJobs/${item.src}`}
              fill
              alt="company-logo"
              className="object-contain"
            />
          </div>
          <h4 className="font-bold text-lg">{item.designation}</h4>
          <div className="text-[#40189D] my-1 font-medium text-[15px]">
            ${item.minPrice} - ${item.maxPrice}
          </div>
          <div className="text-[#757575] text-sm leading-[18px] font-light">
            {item.desc}
          </div>
          <button className="mt-3 mb-5 bg-[#89A0FF] px-[22px] py-2 text-white font-medium rounded-full text-[15px]">
            {item.type}
          </button>
        </div>
        <div className="min-w-max flex flex-col items-end gap-6 pt-3">
          <button onClick={() => setIsSaved(!isSaved)}>
            {isSaved ? (
              <>
                <SavedSVG />
              </>
            ) : (
              <>
                <UnSavedSVG />
              </>
            )}
          </button>
          <div className="capitalize font-semibold text-lg">
            {item.location.city} , {item.location.country}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedJobsCard;
