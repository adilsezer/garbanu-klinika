import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      {/* DaisyUI Loading centered in the div */}
      <div className="loading loading-dots loading-md text-primary"></div>
    </div>
  );
};

export default LoadingComponent;
