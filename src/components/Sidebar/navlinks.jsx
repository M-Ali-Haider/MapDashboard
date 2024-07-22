import SidebarNavLink from "./navlink";

const SidebarNavLinks = ({ navLinks }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        {navLinks.map((item, index) => {
          return <SidebarNavLink key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default SidebarNavLinks;
