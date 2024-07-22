import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.href}
      className={`${
        pathName === item.href ? "bg-white text-black" : ""
      } flex items-center gap-3 pl-2 py-3 rounded-l-xl`}
    >
      {item.svg}
      <span>{item.name}</span>
    </Link>
  );
};

export default SidebarNavLink;
