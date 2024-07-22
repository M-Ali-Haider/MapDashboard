import ProfileCheckSVG from "@/assets/profileCheck";

const ProfileChecks = ({ item }) => {
  const color = item.checkStatus ? "#53BD00" : "#757575";
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="text-[#757575]">{item.checkTitle}</div>
        <div>
          <ProfileCheckSVG fill={color} />
        </div>
      </div>
    </>
  );
};

export default ProfileChecks;
