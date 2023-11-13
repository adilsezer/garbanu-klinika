import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large";
}

export default function Button({
  text,
  onClick,
  className = "",
  size = "medium",
}: Props) {
  // Define base classes for the button
  const baseClasses =
    "rounded-xl shadow-md focus:outline-none bg-secondary text-primary";

  // Determine size classes with responsive design
  const sizeClasses = {
    large: "px-4 py-4 text-base md:px-12 md:py-5 md:text-xl",
    medium: "px-3 py-3 text-base md:px-8 md:py-4 md:text-lg",
    small: "px-2 py-2 text-sm md:px-4 md:py-3 md:text-base",
  };

  // Combine all classes using template literals and conditional logic
  const buttonClasses =
    `${baseClasses} ${sizeClasses[size]} ${className}`.trim();

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
}
