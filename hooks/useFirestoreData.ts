// hooks/useFirestoreData.ts
import { useState, useEffect } from "react";
import db from "../lib/firebase/firebaseInit";
import { doc, getDoc } from "firebase/firestore";

export function useFirestoreData(docPath: string) {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, docPath);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data().text);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [docPath]);

  return { data, loading, error };
}
