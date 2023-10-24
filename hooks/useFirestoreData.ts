// hooks/useFirestoreData.ts
"use client";
import { useState, useEffect } from "react";
import db from "../lib/firebase/firebaseInit";
import { doc, getDoc } from "firebase/firestore";
import { Language } from "@projectTypes/language";

export function useFirestoreData(docPath: string, lang: Language) {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, docPath);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const bannerData = docSnap.data() as { [key in Language]: string }; // Type assertion here
          setData(bannerData[lang]);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [docPath, lang]); // Include lang in the dependency array

  return { data, loading, error };
}
