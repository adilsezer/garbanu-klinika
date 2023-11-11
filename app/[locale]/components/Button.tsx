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
  className,
  size = "medium",
}: Props) {
  // Define base classes for the button
  const baseClasses =
    "rounded shadow focus:outline-none bg-secondary text-primary";

  // Determine size classes
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-md",
    large: "px-8 py-4 text-lg",
  };

  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
}
