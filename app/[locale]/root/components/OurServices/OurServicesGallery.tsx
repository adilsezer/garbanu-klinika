"use client";

import React from "react";
import OurServicesCard from "./OurServicesCard";
import SectionTitle from "@components/layout/SectionTitle";
import { useTranslations } from "next-intl";

// Define the type for your service data
type Service = {
  id: number;
  title: string;
  description: string;
};

const servicesData: Service[] = [
  { id: 1, title: "GARBANŲ TRANSFORMACIJA", description: "skaitļi daugiau" },
  { id: 2, title: "GARBANOTŲ PLAUKŲ KIRPIMAS", description: "skaitļi daugiau" },
  // Add more services as needed...
];

const ServicesList: React.FC = () => {
  const t = useTranslations("OurServicesGallery");
  return (
    <div>
      <SectionTitle className="text-center" text={t("ourServicesTitle")} />
      <div className="flex flex-wrap justify-center gap-4">
        {servicesData.map((service) => (
          <OurServicesCard
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
