"use client";

import { usePathname } from "next/navigation";

const DisplayPageName = ({ navLinks }) => {
  const pathName = usePathname();
  const object = navLinks.find((item) => item.href === pathName);
  return (
    <>
      <h1 className="text-2xl md:text-[28px] pb-[4px] font-bold">
        {object.name}
      </h1>
    </>
  );
};

export default DisplayPageName;
