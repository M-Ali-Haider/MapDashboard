import SidebarLogoSVG from "@/assets/Sidebar/logo";
import SidebarNavLinks from "./navlinks";

const SidebarLogo = ({ navLinks }) => {
  return (
    <div className="flex flex-col items-center gap-9 min-w-[332px]">
      <div className="pr-9 w-full flex items-center justify-center">
        <SidebarLogoSVG width={300} height={59} />
      </div>
      <SidebarNavLinks navLinks={navLinks} />
    </div>
  );
};

export default SidebarLogo;
