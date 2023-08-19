// SocialMediaIcons.tsx
import React from "react";

const SocialMediaIcons: React.FC = () => (
  <div className="flex flex-col absolute top-2 md:top-20 left-2 z-50">
    <a
      href="https://www.facebook.com/garbanuklinika"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/icons/facebook-icon.png"
        alt="Facebook"
        className="social-icon"
      />
    </a>
    <a
      href="https://www.tiktok.com/@garbanuklinika"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/icons/tiktok-icon.png" alt="TikTok" className="social-icon" />
    </a>
    <a
      href="https://www.instagram.com/garbanuklinika"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-container"
    >
      <img
        src="/icons/instagram-icon.png"
        alt="Instagram"
        className="social-icon"
      />
    </a>
    {/* Add more icons as needed */}
  </div>
);

export default SocialMediaIcons;
