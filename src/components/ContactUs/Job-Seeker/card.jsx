"use client";
import { useSelector } from "react-redux";

const ContactUsCard = ({ item }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <>
      <div
        className={`${
          isSidebarOpen ? "" : ""
        } aspect-[340/171] rounded-3xl shadow-sm md:shadow-lg px-8 flex-1 max-w-[338px] min-w-[250px] flex items-center flex-col border-[3px] border-[#89A0FF] border-solid`}
      >
        <item.svg
          className={`${
            isSidebarOpen ? "w-9 h-9 mt-4" : "w-11 h-11 mt-6"
          } transition-all ease-custom-ease duration-500`}
        />
        <div
          className={`text-[#767778] ${
            isSidebarOpen ? "mt-[6px] text-[15px]" : "mt-[10px]"
          } -mb-[2px]  leading-[23px]`}
        >
          {item.type}
        </div>
        <div
          className={`text-[#1A1C1E] ${
            isSidebarOpen ? "text-lg" : "text-[22px]"
          }  transition-all duration-300 ease-custom-ease font-medium leading-[35px]`}
        >
          {item.value}
        </div>
      </div>
    </>
  );
};

export default ContactUsCard;

// font-family: Public Sans;
// font-size: 25px;
// font-weight: 500;
// line-height: 35px;
// letter-spacing: -0.005em;
// text-align: left;
