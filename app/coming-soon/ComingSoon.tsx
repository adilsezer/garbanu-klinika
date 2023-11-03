import Image from "next/image";
import React from "react";

// Constants for styles
const BG_COLOR = "bg-black";
const BG_OPACITY = "bg-opacity-50";
const TEXT_COLOR = "text-white";

// Constants for content
const CONTENT = [
  {
    id: 1,
    title: "Jau greitai!",
    description:
      "Šiuo metu svetainė yra kuriama, tačiau pasirodys jau netrukus!",
  },
  {
    id: 2,
    title: "Coming Soon!",
    description:
      "Our website is under construction. We will be here soon with our new wonderful e-shop for curly hair!",
  },
];

// Reusable Content Block Component
interface ContentBlockProps {
  title: string;
  description: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description }) => (
  // Text size adjustments for smaller screens
  <div>
    <h1 className={`${TEXT_COLOR} text-xl md:text-2xl font-semibold`}>
      {title}
    </h1>
    <p className={`${TEXT_COLOR} mt-2 text-base md:text-lg`}>{description}</p>
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
        className="object-cover z-0" // Ensure the image is in the background
      />

      {/* Text Content including the logo */}
      <div
        // Padding and margin adjustments for smaller screens
        className={`m-6 p-4 md:p-8 ${BG_COLOR} ${BG_OPACITY} rounded-lg shadow-xl z-10`}
      >
        {/* Logo centered horizontally with margin-bottom, and size adjustments for smaller screens */}
        <div className="flex justify-center mb-2">
          <div className="relative w-36 h-14 md:w-[200px] md:h-[79px]">
            <Image
              src="/web-ui/garbanu-klinika-white-logo.png"
              alt="Garbanų Klinika logo"
              fill
              className="object-contain" // To ensure logo maintains aspect ratio
            />
          </div>
        </div>
        {/* Content Blocks */}
        {CONTENT.map((block, index) => (
          <React.Fragment key={block.id}>
            <ContentBlock title={block.title} description={block.description} />
            {index !== CONTENT.length - 1 && (
              // Horizontal line adjustment for smaller screens
              <hr className="my-2 md:my-4 border-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Footer */}
      <div
        // Padding adjustment for smaller screens
        className={`absolute bottom-0 inset-x-0 py-2 md:py-4 text-center ${TEXT_COLOR} ${BG_COLOR} ${BG_OPACITY}`}
      >
        © 2023 Garbanų Klinika. All Rights Reserved.
      </div>
    </div>
  );
};

export default ComingSoon;
