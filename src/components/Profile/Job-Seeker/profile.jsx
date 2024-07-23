import HorizontalLayoutWrapper from "@/components/Wrappers/horizontalLayout";
import EditProfile from "./editProfile";
import ProfileDetails from "./profileDetails";
import UploadDocuments from "./uploadDocuments";
import RightColumnWrapper from "@/components/Wrappers/rightColumnWrapper";

const JobSeekerProfile = () => {
  return (
    <>
      <HorizontalLayoutWrapper styles={"gap-6 mt-10"}>
        <EditProfile />
        <RightColumnWrapper styles={"md:min-w-[300px] md:max-w-[325px] gap-5"}>
          <ProfileDetails />
          <UploadDocuments />
        </RightColumnWrapper>
      </HorizontalLayoutWrapper>
    </>
  );
};

export default JobSeekerProfile;
