import ProfileOptionsArrow from "@/assets/profileOptions/arrow";

const AccountOptionCard = ({ item, trigger }) => {
  return (
    <>
      <div className="flex gap-[10px] items-center relative">
        {item.svg}
        <div
          className={`${
            trigger ? "border-t" : ""
          } border-b border-[#efefef] text-[15px] border-solid leading-[21px] w-full py-3`}
        >
          {item.title}
        </div>
        <div className="absolute right-0">
          <ProfileOptionsArrow />
        </div>
      </div>
    </>
  );
};

export default AccountOptionCard;
