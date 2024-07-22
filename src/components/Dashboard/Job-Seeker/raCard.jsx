// import { timeAgo, timeAgoCustomStyle } from "@/utils/timeAgo";

const RecentActivityCard = ({ item }) => {
  return (
    <>
      <div className="flex gap-3 text-[15px]">
        {item.svg}
        <div>
          <div className="leading-[18px]">{item.desc}</div>
          <div className="leading-[18px] mt-1">
            {/* {timeAgo.format(new Date(item.datetime), timeAgoCustomStyle)} */}
            12h ago
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentActivityCard;
