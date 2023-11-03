import Image from "next/image";
import React from "react";

// Constants for styles
const BG_COLOR = "bg-black";
const BG_OPACITY = "bg-opacity-60";
const TEXT_COLOR = "text-white";

// Constants for content
const CONTENT = [
  {
    id: 1,
    title: "Netrukus pasirodys",
    description:
      "Mūsų svetainė šiuo metu kuriama. Netrukus pasirodysime su nauja nuostabia svetaine.",
  },
  {
    id: 2,
    title: "Coming Soon",
    description:
      "Our website is under construction. We will be here soon with our new awesome site.",
  },
];

// Reusable Content Block Component
interface ContentBlockProps {
  title: string;
  description: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description }) => (
  <div>
    <h1 className={`${TEXT_COLOR} text-2xl font-semibold`}>{title}</h1>
    <p className={`${TEXT_COLOR} mt-2 text-lg`}>{description}</p>
  </div>
);

const ComingSoon: React.FC = () => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen ${BG_COLOR}`}
    >
      {/* Background Image */}
      <Image
        src="/headers/curly-hair-women-banner.jpg"
        alt="Elegant curly hair women banner"
        fill
      />

      {/* Text Content including the logo */}
      <div
        className={`p-8 ${BG_COLOR} ${BG_OPACITY} rounded-lg shadow-xl z-10`}
      >
        {/* Logo centered horizontally with margin-bottom */}
        <div className="flex justify-center mb-6">
          <div className="relative w-[200px] h-[79px]">
            <Image
              src="/web-ui/garbanu-klinika-white-logo.png"
              alt="Garbanų Klinika logo"
              fill
            />
          </div>
        </div>
        {/* Content Blocks */}
        {CONTENT.map((block, index) => (
          <React.Fragment key={block.id}>
            <ContentBlock title={block.title} description={block.description} />
            {index !== CONTENT.length - 1 && (
              <hr className="my-4 border-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer */}
      <div
        className={`absolute bottom-0 inset-x-0 py-2 text-center ${TEXT_COLOR} ${BG_COLOR} ${BG_OPACITY}`}
      >
        © 2023 Garbanų Klinika. All Rights Reserved.
      </div>
    </div>
  );
};

export default ComingSoon;
