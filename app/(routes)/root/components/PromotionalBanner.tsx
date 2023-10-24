"use client";
import React from "react";
import { useFirestoreData } from "@hooks/useFirestoreData"; // Adjust the import path accordingly
import { Language } from "@projectTypes/language";

interface PromotionalBannerProps {
  docPath: string; // Adjust the type of docPath here
  lang: Language;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  docPath,
  lang,
}) => {
  const { data, loading, error } = useFirestoreData(docPath, lang);

  if (!data) return null;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div className="bg-black text-white text-center py-2">{data}</div>;
};

export default PromotionalBanner;
