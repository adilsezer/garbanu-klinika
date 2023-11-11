import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 bg-white rounded-full shadow-md font-medium text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
    >
      {text}
    </button>
  );
}
