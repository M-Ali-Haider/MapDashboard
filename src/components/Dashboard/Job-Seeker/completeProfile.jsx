import ProfileProgressBar from "./progressBar";
import { profileChecks } from "@/utils/profileChecks";
import ProfileChecks from "./profileChecks";

const CompleteYourProfile = () => {
  return (
    <>
      <div className="shadow-figmaShadow rounded-[30px] p-6">
        <h3 className="mb-1 text-xl">Complete Your Profile</h3>
        <ProfileProgressBar />
        <div className="flex flex-col gap-1 mt-2">
          {profileChecks.map((item, index) => {
            return <ProfileChecks key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CompleteYourProfile;
