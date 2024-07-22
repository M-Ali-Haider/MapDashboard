import RecentActivityGrid from "./raGrid";

const RecentActivity = () => {
  return (
    <>
      <div className="shadow-figmaShadow rounded-[30px] p-6 flex-1">
        <h3 className="text-xl mb-5">Recent Activity</h3>
        <RecentActivityGrid />
      </div>
    </>
  );
};

export default RecentActivity;
