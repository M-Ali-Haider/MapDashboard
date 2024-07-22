const ProfileProgressBar = () => {
  const percentage = 70;
  return (
    <>
      <div className="flex items-center gap-2">
        <div
          className={`relative w-full h-4 bg-[#DFDFDF] overflow-hidden rounded-full before:w-[${percentage}*1%] before:rounded-full before:absolute before:bottom-0 before:right-0 before:left-0 before:top-0 before:bg-[#89A0FF]`}
        ></div>
        <div>{percentage}%</div>
      </div>
    </>
  );
};

export default ProfileProgressBar;
