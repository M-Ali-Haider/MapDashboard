import { recentActivities } from "@/utils/recentActivities";
import RecentActivityCard from "./raCard";

const RecentActivityGrid = () => {
  return (
    <>
      <div className="flex flex-col gap-4 max-h-[270px] overflow-y-scroll no-scrollbar">
        {recentActivities.map((item, index) => {
          return <RecentActivityCard key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default RecentActivityGrid;
