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
      buttonText:
        locale === "en" ? item.localization.en.name : item.localization.lt.name,
      url: `/${collectionKey}/${item.id}`,
      createdAt: item.createdAt.toDate(),
      updatedAt: item.updatedAt.toDate(),
      name: item.name,
    })) || [];

  return { [collectionKey]: collectionData, loading, error };
}
