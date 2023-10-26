"use client";
import React from "react";
import { useFirestoreData } from "@hooks/useFirestoreData"; // Adjust the import path accordingly
import { promoBannerDocPath } from "@lib/firebase/firebaseConfig";
import { useLocale } from "next-intl";

export default function PromotionalBanner() {
  const locale = useLocale();
  const { data, loading, error } = useFirestoreData(promoBannerDocPath, locale);

  if (!data) return null;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div className="bg-black text-white text-center py-2">{data}</div>;
}
