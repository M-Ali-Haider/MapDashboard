const ProfileProgressBar = () => {
  const percentage = 70;
  return (
    <>
      <div className="flex items-center gap-2">
        <div
          className={`relative w-full h-4 bg-[#DFDFDF] overflow-hidden rounded-full`}
        >
          <div
            style={{ width: `${percentage}%` }}
            className="h-full bg-[#89A0FF] rounded-full"
          ></div>
        </div>
        <div>{percentage}%</div>
      </div>
    </>
  );
};

export default ProfileProgressBar;
