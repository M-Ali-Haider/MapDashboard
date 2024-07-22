import BoxWrapper from "@/components/Wrappers/boxWrapper";
import Image from "next/image";
import nextConfig from "../../../../next.config";
import { profileDetails } from "@/utils/profileDetails";
import ProfileEmailSVG from "@/assets/profileEmail";

const ProfileDetails = () => {
  return (
    <>
      <BoxWrapper
        styles={
          "min-w-[300px] flex flex-col items-center justify-center aspect-[407/413]"
        }
      >
        <Image
          src={`${nextConfig.basePath}/${profileDetails.src}`}
          alt="profile-image"
          width={128}
          height={128}
          className="rounded-full object-center"
        />
        <h2 className="font-medium text-[32px] leading-[42.3px] mt-2">
          {profileDetails.name}
        </h2>
        <div className="flex items-center gap-1 mt-[6px]">
          <ProfileEmailSVG />
          <span className="leading-[18px] text-[15px]">
            {profileDetails.email}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-[10px]">
          {profileDetails.socials?.map((item, index) => {
            return (
              <a key={index} target="_blank" href={item.href}>
                {item.svg}
              </a>
            );
          })}
        </div>
      </BoxWrapper>
    </>
  );
};

export default ProfileDetails;
