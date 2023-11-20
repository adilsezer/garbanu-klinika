// ErrorComponent.tsx
import React from "react";

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="text-center">
        <p className="text-lg font-semibold text-red-600">Error</p>
        <p className="text-md text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
