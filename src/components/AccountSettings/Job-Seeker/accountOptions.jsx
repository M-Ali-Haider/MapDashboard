import BoxWrapper from "@/components/Wrappers/boxWrapper";
import { profileOptions } from "@/utils/profileOptions";
import AccountOptionCard from "./accountOptionCard";
import ProfileVisibility from "./profileVisibility";

const AccountSettingsOptions = () => {
  return (
    <>
      <BoxWrapper styles={"flex-1 pr-0 pl-0 pb-2 pt-0"}>
        <div className="pr-14 pl-6">
          <h3 className="font-bold text-2xl my-6">Profile Incomplete</h3>
          <ProfileVisibility />
          {profileOptions.map((item, index) => {
            return (
              <AccountOptionCard
                key={index}
                item={item}
                totalLength={profileOptions.length}
              />
            );
          })}
        </div>
        <div className="text-[#a7a8a9] text-[12px] w-full text-center mt-9">
          Member Since: Aug 2023
        </div>
      </BoxWrapper>
    </>
  );
};

export default AccountSettingsOptions;
