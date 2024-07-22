"use client";
import { useSelector } from "react-redux";
import SidebarLogo from "./logo";
import SidebarLogOut from "./logout";

const Sidebar = ({ navLinks }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <>
      <nav
        className={`${
          isSidebarOpen ? "w-[368px] pl-9" : "w-0"
        } bg-[#1A1C1E] py-9 h-screen overflow-hidden transition-all duration-500 ease-custom-ease text-white flex flex-col justify-between`}
      >
        <SidebarLogo navLinks={navLinks} />
        <SidebarLogOut />
      </nav>
    </>
  );
};

export default Sidebar;
