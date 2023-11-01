import React from "react";
import Image from "next/image";

// Constants
const CONTENT = [
  {
    title: "Netrukus pasirodys",
    description:
      "Mūsų svetainė šiuo metu kuriama. Netrukus pasirodysime su nauja nuostabia svetaine.",
  },
  {
    title: "Coming Soon",
    description:
      "Our website is under construction. We will be here soon with our new awesome site.",
  },
];

// Reusable Content Block
type ContentBlockProps = {
  title: string;
  description: string;
};

const ContentBlock = ({ title, description }: ContentBlockProps) => (
  <div>
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className="text-lg">{description}</p>
  </div>
);

const ComingSoon = () => {
  const textStyle = "bg-first bg-opacity-50 p-4 rounded-md z-10";

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/headers/curly-hair-women-banner.jpg"
        layout="fill"
        objectFit="cover"
        priority={true}
        alt="Background Image"
        className="z-0"
      />

      {/* Text Content */}
      <div className={textStyle}>
        {CONTENT.map((block, index) => (
          <React.Fragment key={index}>
            <ContentBlock title={block.title} description={block.description} />
            {index !== CONTENT.length - 1 && <hr className="my-4" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
