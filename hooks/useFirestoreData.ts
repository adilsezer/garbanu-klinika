// hooks/useFirestoreData.ts
"use client";
import { useState, useEffect } from "react";
import db from "../lib/firebase/firebaseInit";
import { doc, getDoc } from "firebase/firestore";

type FirestoreBannerData = {
  [key: string]: string;
  en: string;
  lt: string;
};

export function useFirestoreData(docPath: string, lang: string) {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!docPath || !lang) {
        setError(new Error("Invalid path or language"));
        return;
      }
      try {
        const docRef = doc(db, docPath);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const bannerData = docSnap.data() as FirestoreBannerData;
          setData(bannerData[lang]);
        }
      } catch (err: unknown) {
        setError(new Error("Failed to fetch data: " + (err as Error).message));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [docPath, lang]);

  return { data, loading, error };
}
