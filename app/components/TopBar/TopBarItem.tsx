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
        ? "bg-primary text-secondary font-semibold"
        : "bg-secondary text-primary hover:bg-primary hover:text-secondary"
    }`}
  >
    {label}
  </div>
);

export default TopBarItem;
