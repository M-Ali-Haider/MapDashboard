import ProfileCheckSVG from "@/assets/profileCheck";

const ProfileChecks = ({ item }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="text-[#757575]">{item.checkTitle}</div>
        <div>
          <ProfileCheckSVG
            className={`fill-[${item.checkStatus ? "#757575" : "#53BD00"}]`}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileChecks;
