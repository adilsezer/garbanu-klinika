import React from "react";
import CurlArrow from "@components/common/CurlArrow";
import Link from "next/link";
import { useTranslations } from "next-intl";

export interface ServiceType {
  id: string;
  name: string;
  url: string;
}

const OurServicesCard: React.FC<{ service: ServiceType }> = ({ service }) => {
  const t = useTranslations("OurServicesGallery");

  return (
    <Link
      href={service.url}
      passHref
      className="flex flex-col w-[45%] md:w-[22%] h-48"
    >
      <div className="card relative bg-tertiary text-primary shadow-xl w-full h-48 overflow-hidden">
        <div className="card-body items-center text-center">
          <p className="text-sm md:text-lg">{service.name}</p>
        </div>
      </div>
      <p className="text-center mt-2">{t("ourServicesReadMore")}</p>
      <CurlArrow />
    </Link>
  );
};

export default OurServicesCard;
