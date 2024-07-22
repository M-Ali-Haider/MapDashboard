import Link from "next/link";

const FormFooter = ({ text, href, hrefName }) => {
  return (
    <div className="mt-4 w-full text-sm flex items-center justify-center gap-[6px] text-[#606060]">
      {text}
      <Link href={href} className="text-[#89A0FF] underline">
        {hrefName}
      </Link>
    </div>
  );
};

export default FormFooter;
