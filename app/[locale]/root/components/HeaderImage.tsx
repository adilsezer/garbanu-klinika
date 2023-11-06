// components/HeaderImage.tsx

import Image from "next/image";

const HeaderImage: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/headers/banner-curly-hair-women.jpg"
        alt="Header Image"
        fill
      />
    </div>
  );
};

export default HeaderImage;
