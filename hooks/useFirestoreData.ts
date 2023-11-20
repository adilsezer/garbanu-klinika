// hooks/useFirestoreData.ts
// hooks/useFirestoreData.ts
import { useState, useEffect } from "react";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import db from "../lib/firebase/firebaseInit"; // Adjust the import path as needed

export function useFirestoreData<T = any>(
  collectionPath: string,
  orderByField?: string,
  orderDirection: "asc" | "desc" = "asc"
) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, collectionPath);
        const q = orderByField
          ? query(colRef, orderBy(orderByField, orderDirection))
          : query(colRef);
        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as T[];
        setData(documents);
      } catch (err: unknown) {
        setError(new Error("Failed to fetch data: " + (err as Error).message));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionPath, orderByField, orderDirection]);

  return { data, loading, error };
}
