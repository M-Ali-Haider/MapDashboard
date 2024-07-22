const BoxWrapper = ({ children, styles }) => {
  return (
    <>
      <div className={`shadow-figmaShadow rounded-[30px] p-6 ${styles}`}>
        {children}
      </div>
    </>
  );
};

export default BoxWrapper;
