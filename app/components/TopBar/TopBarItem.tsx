import React from "react";

interface TopBarItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// Individual item in the top bar
const TopBarItem: React.FC<TopBarItemProps> = ({
  label,
  isActive,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 
      ${
        isActive
          ? "bg-red-500 text-rose-100"
          : "hover:bg-rose-600 hover:text-rose-100"
      }`}
  >
    {label}
  </div>
);

export default TopBarItem;
