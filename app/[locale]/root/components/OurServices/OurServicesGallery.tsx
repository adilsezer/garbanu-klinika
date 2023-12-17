"use client";

import React from "react";
import OurServicesCard from "./OurServicesCard";
import SectionTitle from "@components/layout/SectionTitle";
import { useTranslations } from "next-intl";
import useFirestoreCollection from "@hooks/useFirestoreCollection";
import { FIRESTORE_COLLECTIONS } from "@lib/firebase/firebaseConfig";
import LoadingComponent from "@components/common/LoadingComponent";
import ErrorComponent from "@components/common/ErrorComponent";

const OurServicesGallery: React.FC = () => {
  const {
    services: productServices,
    loading,
    error,
  } = useFirestoreCollection(FIRESTORE_COLLECTIONS.services);
  const t = useTranslations("OurServicesGallery");

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div>
      <SectionTitle className="text-center" text={t("ourServicesTitle")} />
      <div className="flex flex-wrap justify-center gap-4">
        {Array.isArray(productServices) &&
          productServices.map((service) => (
            <OurServicesCard key={service.id} service={service} />
          ))}
      </div>
    </div>
  );
};

export default OurServicesGallery;
