import LogOutSVG from "@/assets/Sidebar/logout";
import AdminNavLink from "./navlink";

const SidebarLogOut = () => {
  const item = {
    name: "Logout",
    href: "/admin/login",
    svg: <LogOutSVG />,
  };

  return (
    <>
      <AdminNavLink item={item} />
    </>
  );
};

export default SidebarLogOut;
