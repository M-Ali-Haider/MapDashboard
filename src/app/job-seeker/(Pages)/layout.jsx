import Header from "@/components/Header/Admin";
import Sidebar from "@/components/Sidebar";
import PageWrapper from "@/providers/PageWrapper";
import { jobSeekerPaths } from "@/utils/allPaths";
import { jobSeekerProfile } from "@/utils/headerProfileLink";
import { jobSeekerSidebar } from "@/utils/sidebar";
export default function PagesLayout({ children }) {
  return (
    <>
      <div className="w-full flex">
        <Sidebar navLinks={jobSeekerSidebar} />
        <div className="flex-1 bg-white flex flex-col items-center">
          <Header profileLink={jobSeekerProfile} allPaths={jobSeekerPaths} />
          <PageWrapper>{children}</PageWrapper>
        </div>
      </div>
    </>
  );
}
