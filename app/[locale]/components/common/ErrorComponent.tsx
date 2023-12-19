import React from "react";

interface ErrorComponentProps {
  message: string;
}

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <div className="card card-compact flex flex-col justify-center items-center">
      <div className="card-body">
        <p className="text-lg font-semibold text-error">Error</p>
        <p className="text-base text-base-content">{message}</p>
      </div>
    </div>
  );
}
