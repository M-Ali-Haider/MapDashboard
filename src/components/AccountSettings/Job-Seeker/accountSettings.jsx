import HorizontalLayoutWrapper from "@/components/Wrappers/horizontalLayout";
import AccountSettingsObjectivesGrid from "./accountObjectivesGrid";
import RightColumnWrapper from "@/components/Wrappers/rightColumnWrapper";
import AccountSettingsOptions from "./accountOptions";

const JobSeekerAccountSettings = () => {
  return (
    <>
      <HorizontalLayoutWrapper styles={"gap-6 mt-10"}>
        <AccountSettingsObjectivesGrid />
        <RightColumnWrapper styles={"max-w-[350px]"}>
          <AccountSettingsOptions />
        </RightColumnWrapper>
      </HorizontalLayoutWrapper>
    </>
  );
};

export default JobSeekerAccountSettings;
