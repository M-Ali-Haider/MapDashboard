import Image from "next/image";
import nextConfig from "../../../../../next.config";

const Profile = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <button className="relative min-w-[52px] min-h-[52px] rounded-full shadow-pfpImage">
          <Image
            src={`${nextConfig.basePath}/adminPfp.jpg`}
            fill
            alt="admins pfp"
            className="object-center rounded-full"
          />
        </button>
        <div className="">
          <h2 className="text-sm font-medium">Alex Smith</h2>
          <h4 className="text-xs -mt-[1px]">Admin</h4>
        </div>
      </div>
    </>
  );
};

export default Profile;
