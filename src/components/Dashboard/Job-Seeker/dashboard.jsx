import Stats from "@/components/Stats/statsGrid";
import RecommendedJobs from "./recommendedJobs";
import CompleteYourProfile from "./completeProfile";
import RecentActivity from "./recentActivity";

const JobSeekerDashboard = () => {
  return (
    <>
      <Stats />
      <div className="w-full h-full mt-10 flex flex-wrap gap-6">
        <RecommendedJobs />
        <div className="flex-1 flex flex-col gap-5 max-w-[350px] h-full">
          <CompleteYourProfile />
          <RecentActivity />
        </div>
      </div>
    </>
  );
};

export default JobSeekerDashboard;
