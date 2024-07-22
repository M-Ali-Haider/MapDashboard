import Header from "@/components/Header/Admin";
import Sidebar from "@/components/Sidebar";
import PageWrapper from "@/providers/PageWrapper";
import { jobSeekerSidebar } from "@/utils/sidebar";
export default function PagesLayout({ children }) {
  return (
    <>
      <div className="w-full flex">
        <Sidebar navLinks={jobSeekerSidebar} />
        <div className="flex-1 bg-white flex flex-col items-center">
          <Header navLinks={jobSeekerSidebar} />
          <PageWrapper>{children}</PageWrapper>
        </div>
      </div>
    </>
  );
}
