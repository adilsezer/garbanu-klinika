// components/BannerImage.tsx

import Image from "next/image";

type BannerImageProps = {
  src: string;
  alt?: string;
};

const BannerImage: React.FC<BannerImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-screen m-0 p-0 overflow-hidden">
      <Image
        src={src}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
        width={1200} // Increase these values to zoom in
        height={600}
        alt={alt || "Background Image"}
        className="z-0"
      />
    </div>
  );
};

export default BannerImage;
