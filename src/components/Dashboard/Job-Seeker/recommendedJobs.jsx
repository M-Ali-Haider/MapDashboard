import BoxWrapper from "@/components/Wrappers/boxWrapper";
import RecommendedJobsGrid from "./rjGrid";

const RecommendedJobs = () => {
  return (
    <>
      <BoxWrapper
        styles={"flex-1 transition-[width] duration-300 ease-custom-ease"}
      >
        <h2 className="text-2xl font-bold mb-4">Recommended Jobs</h2>
        <RecommendedJobsGrid />
      </BoxWrapper>
    </>
  );
};

export default RecommendedJobs;
