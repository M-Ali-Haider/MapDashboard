import { recommendedJobs } from "@/utils/recommendedJobs";
import RecommendedJobsCard from "./rjCard";

const RecommendedJobsGrid = () => {
  return (
    <>
      <div className="flex flex-col items-start max-h-[455px] overflow-y-scroll no-scrollbar">
        {recommendedJobs.map((item, index) => {
          return (
            <>
              <RecommendedJobsCard key={index} item={item} />
              {index !== recommendedJobs.length - 1 && (
                <div className="w-full border border-[#b3b3b3] border-solid"></div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default RecommendedJobsGrid;
