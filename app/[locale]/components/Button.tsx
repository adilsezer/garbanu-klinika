import React, { ButtonHTMLAttributes } from "react";

interface Props {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 bg-white rounded-full shadow-md font-medium text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
    >
      {text}
    </button>
  );
};

export default Button;
