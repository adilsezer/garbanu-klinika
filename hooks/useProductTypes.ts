// hooks/useProductTypes.ts
import firebase from "firebase/compat/app";
import { useFirestoreData } from "./useFirestoreData";
import { useLocale } from "next-intl";
import { FIRESTORE_COLLECTIONS } from "@lib/firebase/firebaseConfig";

// Define the FirestoreProductType interface here
interface FirestoreProductTypeData {
  id: string;
  createdAt: firebase.firestore.Timestamp; // Assuming it's a string, you might want to parse it into a Date object
  imageURLs: string[];
  localization: {
    en: {
      name: string;
    };
    lt: {
      name: string;
    };
  };
  updatedAt: firebase.firestore.Timestamp; // Same assumption as for createdAt
}

export default function useProductTypes() {
  const locale = useLocale();
  const { data, loading, error } = useFirestoreData<FirestoreProductTypeData>(
    FIRESTORE_COLLECTIONS.productTypes,
    "createdAt",
    "asc"
  );

  const productTypes =
    data?.map((type) => ({
      id: type.id,
      imageUrl: type.imageURLs[0], // Assuming at least one image URL is always present
      buttonText:
        locale === "en" ? type.localization.en.name : type.localization.lt.name,
      url: `/products/${type.id}`,
      createdAt: type.createdAt.toDate(), // Converting Firestore Timestamp to Date
      updatedAt: type.updatedAt.toDate(), // Converting Firestore Timestamp to Date
    })) || [];

  return { productTypes, loading, error };
}
