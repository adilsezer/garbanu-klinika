// AboutUs.tsx
import React from "react";
import ProfileSection from "./ProfileSection";
import ContactSection from "./ContactSection";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between my-6 md:my-12">
        <ProfileSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default AboutUs;
