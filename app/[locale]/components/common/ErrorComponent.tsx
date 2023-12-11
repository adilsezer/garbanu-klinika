import React from "react";

interface ErrorComponentProps {
  message: string;
}

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    // Outer div takes full width and height of its container, with responsive padding
    <div className="flex justify-center items-center text-center w-full h-full p-2 md:p-4">
      {/* Responsive text sizes for different screen widths */}
      <div>
        <p className="text-md sm:text-lg font-semibold text-red-600">Error</p>
        <p className="text-sm sm:text-md text-gray-600">{message}</p>
      </div>
    </div>
  );
}
