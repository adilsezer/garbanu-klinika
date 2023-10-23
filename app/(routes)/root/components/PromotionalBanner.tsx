// components/PromotionalBanner.tsx
"use client";
import React from "react";
import { useFirestoreData } from "@hooks/useFirestoreData";

interface PromotionalBannerProps {
  docPath: string | undefined;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ docPath }) => {
  if (!docPath) {
    return null;
  }

  const { data, loading, error } = useFirestoreData(docPath);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div className="bg-black text-white text-center py-2">{data}</div>;
};

export default PromotionalBanner;
