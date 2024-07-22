"use client";
import CompleteSVG from "@/assets/profileOptions/complete";
import EditSVG from "@/assets/profileOptions/edit";
import IncompleteSVG from "@/assets/profileOptions/incomplete";
import { useSelector } from "react-redux";

const AccountObjectiveCard = ({ item }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <>
      <div
        className={`${
          isSidebarOpen ? "min-w-80" : "min-w-96"
        } flex flex-1 shadow-profObjectiveCard rounded-xl px-3 py-6 justify-between border border-[#f2f2f2] border-solid`}
      >
        <div className="flex gap-2">
          <div className="mt-[3px]">
            {item.status ? <CompleteSVG /> : <IncompleteSVG />}
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium">{item.title}</div>
            <div
              className={`${
                item.status
                  ? "text-[#04AE8B] bg-[#e0f5f1]"
                  : "text-[#FA564E] bg-[#ffefee]"
              } text-center rounded-full px-3 py-1 text-[12px] max-w-max`}
            >
              {item.status ? "Complete" : "Incomplete"}
            </div>
          </div>
        </div>

        <div className="flex max-h-[20px] items-center gap-1">
          <EditSVG /> <span className="text-[#767778] text-sm">Edit</span>
        </div>
      </div>
    </>
  );
};

export default AccountObjectiveCard;
