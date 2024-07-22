import React from "react";

const RightColumnWrapper = ({ children, styles }) => {
  return (
    <>
      <div className={`flex-1 flex flex-col h-full ${styles}`}>{children}</div>
    </>
  );
};

export default RightColumnWrapper;
