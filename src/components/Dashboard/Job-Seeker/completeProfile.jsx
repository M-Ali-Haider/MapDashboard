import ProfileProgressBar from "./progressBar";
import { profileChecks } from "@/utils/profileChecks";
import ProfileChecks from "./profileChecks";
import BoxWrapper from "@/components/Wrappers/boxWrapper";

const CompleteYourProfile = () => {
  return (
    <>
      <BoxWrapper styles={""}>
        <h3 className="mb-1 text-xl">Complete Your Profile</h3>
        <ProfileProgressBar />
        <div className="flex flex-col gap-1 mt-2">
          {profileChecks.map((item, index) => {
            return <ProfileChecks key={index} item={item} />;
          })}
        </div>
      </BoxWrapper>
    </>
  );
};

export default CompleteYourProfile;
