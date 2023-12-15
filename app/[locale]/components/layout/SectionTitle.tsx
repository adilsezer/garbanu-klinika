// SectionTitle.tsx

import React from "react";

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <h2 className="text-xl md:text-2xl font-bold text-primary my-4 md:my-8 mx-4 md:mx-10">
      {text}
    </h2>
  );
};

export default SectionTitle;
