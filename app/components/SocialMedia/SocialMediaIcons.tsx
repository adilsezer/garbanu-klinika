// SocialMediaIcons.tsx
import React from "react";
import Image from "next/image";

const SocialMediaIcons: React.FC = () => (
  <div className="flex flex-col absolute top-28 md:top-20 left-5 z-50">
    <a
      href="https://www.facebook.com/garbanuklinika"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/icons/facebook-icon.png"
        alt="Facebook"
        className="social-icon"
        width={32}
        height={32}
      />
    </a>
    <a
      href="https://www.tiktok.com/@garbanuklinika"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/icons/tiktok-icon.png"
        alt="TikTok"
        className="social-icon"
        width={32}
        height={32}
      />
    </a>
    <a
      href="https://www.instagram.com/garbanuklinika"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-container"
    >
      <Image
        src="/icons/instagram-icon.png"
        alt="Instagram"
        className="social-icon"
        width={32}
        height={32}
      />
    </a>
    {/* Add more icons as needed */}
  </div>
);

export default SocialMediaIcons;
