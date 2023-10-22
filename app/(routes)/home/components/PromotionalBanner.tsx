// components/PromotionalBanner.tsx
import React from "react";
import { useFirestoreData } from "@hooks/useFirestoreData";

interface PromotionalBannerProps {
  docPath: string;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ docPath }) => {
  const { data, loading, error } = useFirestoreData(docPath);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div className="bg-black text-white text-center py-2">{data}</div>;
};

export default PromotionalBanner;
