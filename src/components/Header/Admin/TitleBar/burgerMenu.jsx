"use client";

import AdminBurgerMenuSVG from "@/assets/Header/adminBurgerMenu";
import { handleSidebar } from "@/store/Sidebar/slice";
import { useDispatch, useSelector } from "react-redux";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <button
      className={`${
        isSidebarOpen ? "" : "rotate-180"
      } flex items-center justify-center transition-all duration-500 ease-custom-ease`}
      onClick={() => dispatch(handleSidebar())}
    >
      <AdminBurgerMenuSVG className="h-7 w-7 md:h-8 md:w-8" />
    </button>
  );
};

export default BurgerMenu;
