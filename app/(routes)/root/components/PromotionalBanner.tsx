import React from "react";
import { useFirestoreData } from "@hooks/useFirestoreData"; // Adjust the import path accordingly
import { Language } from "@projectTypes/language";

interface PromotionalBannerProps {
  docPath: string | undefined; // Adjust the type of docPath here
  lang: Language;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  docPath,
  lang,
}) => {
  if (!docPath) {
    return null; // Return early if docPath is undefined
  }

  const { data, loading, error } = useFirestoreData(docPath, lang); // Pass lang as an argument here

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div className="bg-black text-white text-center py-2">{data}</div>;
};

export default PromotionalBanner;
