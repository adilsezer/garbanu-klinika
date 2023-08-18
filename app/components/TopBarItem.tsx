import React from "react";

interface TopBarItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TopBarItem: React.FC<TopBarItemProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-4 py-2 rounded ${
        isActive ? "bg-a24e4e" : "bg-opacity-50"
      }`}
    >
      <span style={{ color: "#fff7f7" }}>{label}</span>
    </div>
  );
};

export default TopBarItem;
