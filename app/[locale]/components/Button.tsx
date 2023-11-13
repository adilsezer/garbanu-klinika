import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large";
}

const getSizeClasses = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "large":
      return "px-4 py-4 text-base md:px-12 md:py-5 md:text-xl";
    case "medium":
      return "px-3 py-3 text-base md:px-8 md:py-4 md:text-lg";
    case "small":
      return "px-2 py-2 text-sm md:px-4 md:py-3 md:text-base";
    default:
      return ""; // Default case if needed
  }
};

export default function Button({
  text,
  onClick,
  className = "",
  size = "medium",
}: Props) {
  // Define base classes for the button
  const baseClasses =
    "rounded-xl shadow-md focus:outline-none bg-secondary text-primary";

  // Combine all classes using template literals
  const buttonClasses = `${baseClasses} ${getSizeClasses(
    size
  )} ${className}`.trim();

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
}
