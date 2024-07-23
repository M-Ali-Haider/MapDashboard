const HorizontalLayoutWrapper = ({ children, styles }) => {
  return (
    <div
      className={`w-full h-full flex flex-col md:flex-row flex-wrap ${styles}`}
    >
      {children}
    </div>
  );
};

export default HorizontalLayoutWrapper;
