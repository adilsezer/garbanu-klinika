// hooks/useProductTypes.ts
import { useFirestoreData } from "./useFirestoreData";
import { useLocale } from "next-intl";

// Define the FirestoreProductType interface here
interface FirestoreProductType {
  id: string;
  name_en: string;
  name_lt: string;
  imageUrl: string;
  // Add any other properties that are relevant to your Firestore documents
}

export default function useProductTypes() {
  const productTypesPath = process.env
    .NEXT_PUBLIC_FIRESTORE_PRODUCT_TYPES_PATH as string;
  const locale = useLocale();
  const { data, loading, error } = useFirestoreData<FirestoreProductType>(
    productTypesPath,
    "createdAt",
    "asc"
  );

  const productTypes =
    data?.map((type) => ({
      id: type.id,
      imageUrl: type.imageUrl,
      buttonText: locale === "en" ? type.name_en : type.name_lt,
      url: `/products/${type.id}`,
    })) || [];

  return { productTypes, loading, error };
}
