import Header from "@/components/Header/Admin";
import Sidebar from "@/components/Sidebar";
import { adminPaths } from "@/utils/allPaths";
import { adminProfile } from "@/utils/headerProfileLink";
import { adminSidebar } from "@/utils/sidebar";
export default function PagesLayout({ children }) {
  return (
    <>
      <div className="w-full flex">
        <Sidebar navLinks={adminSidebar} />
        <div className="flex-1 bg-white">
          <Header profileLink={adminProfile} allPaths={adminPaths} />
          <div className="mx-9 pt-8 max-h-[calc(100vh-84px)] overflow-y-scroll no-scrollbar">
            <div className="h-screen">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
