// components/ArrowButton.tsx
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  const isLeft = direction === "left";
  const positionClass = isLeft ? "left-2 md:left-14" : "right-2 md:right-14";
  const Icon = isLeft ? FaArrowLeft : FaArrowRight;

  return (
    <button
      className={`btn btn-primary btn-circle border-none bg-opacity-70 absolute ${positionClass} z-20`}
      onClick={onClick}
    >
      <Icon className="text-xl md:text-2xl" />
    </button>
  );
};

export default ArrowButton;
