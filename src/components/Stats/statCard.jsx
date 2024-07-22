"use client";
import { useSelector } from "react-redux";
const StatCard = ({ item, index }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <>
      <div
        style={{ background: index % 2 === 0 ? "#6AC6E0" : "#89A0FF" }}
        className="aspect-[338/149] rounded-3xl shadow-sm md:shadow-lg px-8 flex-1 max-w-[338px] min-w-[250px] flex items-center justify-between"
      >
        <item.svg
          className={`${
            isSidebarOpen ? "h-10 w-10" : "h-16 w-16"
          } transition-all ease-custom-ease duration-500`}
        />
        <div className="flex flex-col items-end text-white font-medium">
          <div className={`${isSidebarOpen ? "text-lg" : "text-xl"}`}>
            {item.title}
          </div>
          <div className={`${isSidebarOpen ? "text-3xl" : "text-4xl"}`}>
            {item.total}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatCard;
