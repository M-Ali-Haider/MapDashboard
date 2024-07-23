import { stats } from "@/utils/stats";
import StatCard from "./statCard";
import StatsWrapper from "../Wrappers/StatsWrapper";

const Stats = () => {
  return (
    <>
      <StatsWrapper>
        {stats.map((item, index) => {
          return <StatCard key={index} item={item} index={index} />;
        })}
      </StatsWrapper>
    </>
  );
};

export default Stats;
