// hooks/useProductCardCatalog.ts

import { useState, useEffect } from "react";
import { useFirestoreData } from "./useFirestoreData";
import { useLocale } from "next-intl";
import firebase from "firebase/compat/app";
import {
  productsCollection,
  productTypesCollection,
} from "@lib/firebase/firebaseConfig";

// Interface for product data as retrieved from Firestore
interface FirestoreProductData {
  id: string;
  attributes: { volume: string };
  brandId: string;
  createdAt: firebase.firestore.Timestamp;
  imageURLs: string[];
  localization: {
    en: { detailedDescription: string; name: string; shortDescription: string };
    lt: { detailedDescription: string; name: string; shortDescription: string };
  };
  price: number;
  stock: number;
  tags: string[];
  typeId: string;
  updatedAt: firebase.firestore.Timestamp;
}

// Interface for product type data as retrieved from Firestore
interface FirestoreProductTypeData {
  id: string;
  localization: {
    en: { name: string };
    lt: { name: string };
  };
}

// Interface for product data as used in the application
interface ProductDisplayData {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  productTypeName: string;
  createdAt: Date;
  updatedAt: Date;
}

export function useProductCardCatalog() {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFirestoreData<FirestoreProductData>(productsCollection);
  const {
    data: productTypes,
    loading: productTypesLoading,
    error: productTypesError,
  } = useFirestoreData<FirestoreProductTypeData>(productTypesCollection);
  const [productDisplayData, setProductDisplayData] = useState<
    ProductDisplayData[]
  >([]);
  const locale = useLocale();

  useEffect(() => {
    if (products && productTypes) {
      const productTypeNamesMap = productTypes.reduce((acc, type) => {
        acc[type.id] =
          locale === "lt"
            ? type.localization.lt.name
            : type.localization.en.name;
        return acc;
      }, {} as Record<string, string>);

      const mappedProducts = products.map((product) => ({
        id: product.id,
        name:
          locale === "lt"
            ? product.localization.lt.name
            : product.localization.en.name,
        price: product.price,
        imageUrl: product.imageURLs[0],
        productTypeName: productTypeNamesMap[product.typeId],
        createdAt: product.createdAt.toDate(),
        updatedAt: product.updatedAt.toDate(),
      }));

      setProductDisplayData(mappedProducts);
    }
  }, [products, productTypes, locale]);

  const loading = productsLoading || productTypesLoading;
  const error = productsError || productTypesError;

  return { data: productDisplayData, loading, error };
}
