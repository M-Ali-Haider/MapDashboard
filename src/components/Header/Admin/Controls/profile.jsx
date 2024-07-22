import Image from "next/image";
import nextConfig from "../../../../../next.config";
import Link from "next/link";

const Profile = ({ profileLink }) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Link
          href={profileLink}
          className="relative min-w-[52px] min-h-[52px] rounded-full shadow-pfpImage"
        >
          <Image
            src={`${nextConfig.basePath}/adminPfp.jpg`}
            fill
            alt="admins pfp"
            className="object-center rounded-full"
          />
        </Link>
        <div className="">
          <h2 className="text-sm font-medium">Alex Smith</h2>
          <h4 className="text-xs -mt-[1px]">Admin</h4>
        </div>
      </div>
    </>
  );
};

export default Profile;
