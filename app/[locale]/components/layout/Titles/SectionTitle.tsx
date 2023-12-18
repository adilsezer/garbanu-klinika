import React from "react";

interface SectionTitleProps {
  text: string;
  className?: string; // Optional prop for additional class names
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, className }) => {
  // Combine the existing class names with the passed className
  const combinedClassName = `text-xl md:text-2xl font-bold text-primary mt-10 mb-6 md:mb-4 md:mt-14 mx-4 md:mx-10 ${
    className || ""
  }`;

  return <h2 className={combinedClassName}>{text}</h2>;
};

export default SectionTitle;
