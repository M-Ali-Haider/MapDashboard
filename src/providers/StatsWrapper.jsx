"use client";
import { useSelector } from "react-redux";

const StatsWrapper = ({ children }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <>
      <div
        className={`${
          isSidebarOpen ? "" : ""
        } flex flex-wrap w-full justify-between gap-4`}
      >
        {children}
      </div>
    </>
  );
};

export default StatsWrapper;
