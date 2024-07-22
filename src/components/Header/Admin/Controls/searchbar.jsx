import InnerSearchSVG from "@/assets/Header/innerSearchbar";
import styles from "./style.module.css";
const HeaderSearchBar = () => {
  return (
    <>
      <div className="hidden xl:flex max-w-[350px] w-full items-center justify-center mr-10 relative">
        <input
          className={`${styles.searchbar} flex items-center focus:outline-none w-full h-full shadow-figmaShadow py-3 rounded-full px-[14px] text-sm placeholder:text-sm placeholder:text-[#8D7F7F]`}
          type="search"
          placeholder="Search something here...."
        />
        <div className="absolute right-4">
          <InnerSearchSVG className="w-[18px] h-[18px]" />
        </div>
      </div>
    </>
  );
};

export default HeaderSearchBar;
