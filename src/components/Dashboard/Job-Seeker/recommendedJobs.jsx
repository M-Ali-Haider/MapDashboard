import RecommendedJobsGrid from "./rjGrid";

const RecommendedJobs = () => {
  return (
    <>
      <div className="flex-1 shadow-figmaShadow rounded-[30px] p-6 transition-[width] duration-300 ease-custom-ease">
        <h2 className="text-2xl font-bold mb-4">Recommended Jobs</h2>
        <RecommendedJobsGrid />
      </div>
    </>
  );
};

export default RecommendedJobs;
