"use client";
import React from "react";
import { useFirestoreData } from "@hooks/useFirestoreData"; // Adjust the import path accordingly
import { promoBannerDocPath } from "@lib/firebase/firebaseConfig";

export default function PromoBanner() {
  const { data, loading, error } = useFirestoreData(promoBannerDocPath);

  if (!data && !loading) return null;

  // Improved loading state
  if (loading)
    return (
      <div className="flex justify-center items-center h-12 bg-primary text-secondary">
        <span className="text-center">Loading...</span>
      </div>
    );

  // Improved error state
  if (error)
    return (
      <div className="flex justify-center items-center h-12 bg-red-500 text-secondary">
        <span className="text-center">Error: {error.message}</span>
      </div>
    );

  // Responsive design adjustments
  return (
    <div className="flex justify-center items-center bg-primary text-secondary py-2 px-4 md:px-8">
      <p className="text-center">{data}</p>
    </div>
  );
}
