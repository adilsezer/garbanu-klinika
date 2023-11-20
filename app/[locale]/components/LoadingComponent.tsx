import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    // Adding margin and padding to the outer div
    <div className="flex justify-center items-center w-full h-full p-4">
      {/* Spinner centered in the div */}
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      {/* Tailwind spinner */}
    </div>
  );
};

export default LoadingComponent;
