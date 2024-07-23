const StatsWrapper = ({ children }) => {
  return (
    <>
      <div
        className={`flex flex-wrap w-full justify-center md:justify-between gap-4`}
      >
        {children}
      </div>
    </>
  );
};

export default StatsWrapper;
