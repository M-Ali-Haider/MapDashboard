import BoxWrapper from "@/components/Wrappers/boxWrapper";
import RecentActivityGrid from "./raGrid";

const RecentActivity = () => {
  return (
    <>
      <BoxWrapper className="">
        <h3 className="text-xl mb-5">Recent Activity</h3>
        <RecentActivityGrid />
      </BoxWrapper>
    </>
  );
};

export default RecentActivity;
