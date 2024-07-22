import Stats from "@/components/Stats/statsGrid";
import RecommendedJobs from "./recommendedJobs";
import CompleteYourProfile from "./completeProfile";
import RecentActivity from "./recentActivity";
import HorizontalLayoutWrapper from "@/components/Wrappers/horizontalLayout";
import RightColumnWrapper from "@/components/Wrappers/rightColumnWrapper";

const JobSeekerDashboard = () => {
  return (
    <>
      <Stats />
      <HorizontalLayoutWrapper styles={"gap-6 mt-10"}>
        <RecommendedJobs />
        <RightColumnWrapper styles={"max-w-[350px] min-w-[300px] gap-5"}>
          <CompleteYourProfile />
          <RecentActivity />
        </RightColumnWrapper>
      </HorizontalLayoutWrapper>
    </>
  );
};

export default JobSeekerDashboard;
