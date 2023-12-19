// hooks/useFirestoreCollection.ts
import firebase from "firebase/compat/app";
import { useFirestoreData } from "./useFirestoreData";
import { useLocale } from "next-intl";
import { FIRESTORE_COLLECTIONS } from "@lib/firebase/firebaseConfig";

interface FirestoreCollectionData {
  id: string;
  createdAt: firebase.firestore.Timestamp;
  imageURLs: string[];
  localization: {
    en: {
      name: string;
    };
    lt: {
      name: string;
    };
  };
  updatedAt: firebase.firestore.Timestamp;
  name: string;
  website: string;
  duration: number;
  price: number;
}

export default function useFirestoreCollection(
  collectionKey: keyof typeof FIRESTORE_COLLECTIONS
) {
  const locale = useLocale();
  const { data, loading, error } = useFirestoreData<FirestoreCollectionData>(
    FIRESTORE_COLLECTIONS[collectionKey],
    "createdAt",
    "asc"
  );

  const collectionData =
    data?.map((item) => ({
      id: item.id,
      imageUrl: item.imageURLs[0],
      url: `/${collectionKey}/${item.id}`,
      createdAt: item.createdAt.toDate(),
      updatedAt: item.updatedAt.toDate(),
      name:
        locale === "en"
          ? item.localization.en.name || item.name
          : item.localization.lt.name || item.name,
      website: item.website,
      duration: item.duration,
      price: item.price,
    })) || [];

  return { [collectionKey]: collectionData, loading, error };
}
