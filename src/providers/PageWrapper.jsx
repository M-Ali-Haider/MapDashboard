"use client";

import { useSelector } from "react-redux";

const PageWrapper = ({ children }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <div
      className={`${
        isSidebarOpen ? "px-9" : "px-2"
      } pt-8 max-h-[calc(100vh-84px)] max-w-[1440px] overflow-y-scroll w-full  no-scrollbar transition-all duration-200 ease-custom-ease`}
    >
      <div className={`min-h-screen pb-8`}>{children}</div>
    </div>
  );
};

export default PageWrapper;
