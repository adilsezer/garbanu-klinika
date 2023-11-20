// LoadingComponent.tsx
import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      {/* Tailwind spinner */}
    </div>
  );
};

export default LoadingComponent;
