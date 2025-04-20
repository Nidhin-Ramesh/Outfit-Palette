import React from "react";

const Skeleton = () => {
  return (
    <div className="card w-40 bg-base-100 shadow-sm">
      <div className="skeleton h-40 w-full rounded-t-xl"></div>
      <div className="card-body p-4">
        <div className="skeleton h-4 w-full mb-2 rounded"></div>
        <div className="skeleton h-4 w-3/4 mb-1 rounded"></div>
      </div>
    </div>
  );
};

export default Skeleton;
