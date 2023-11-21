// hooks/useProductCardCatalog.ts

import { useState, useEffect } from "react";
import { useFirestoreData } from "./useFirestoreData";
import { useLocale } from "next-intl";
import { collection, getDocs } from "firebase/firestore";
import db from "../lib/firebase/firebaseInit";

interface ProductType {
  id: string;
  name_en: string;
  name_lt: string;
}

interface Product {
  id: string;
  name_en: string;
  name_lt: string;
  price: number;
  imageUrl: string;
  typeId: string;
  productType: string; // Localized product type
  // include other fields from your Firestore product documents as needed
}

export function useProductCardCatalog() {
  const locale = useLocale(); // Hook to determine current locale
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFirestoreData<Product>("products", "createdAt", "desc");

  const [productTypes, setProductTypes] = useState<Record<
    string,
    ProductType
  > | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProductTypes = async () => {
    try {
      const productTypesSnapshot = await getDocs(
        collection(db, "productTypes")
      );
      const types = productTypesSnapshot.docs.reduce((acc, doc) => {
        const typeData = doc.data() as ProductType;
        acc[doc.id] = typeData;
        return acc;
      }, {} as Record<string, ProductType>);
      setProductTypes(types);
    } catch (err: unknown) {
      setError(
        new Error("Failed to fetch product types: " + (err as Error).message)
      );
    }
  };

  useEffect(() => {
    fetchProductTypes();
  }, []);

  const combinedData = products?.map((product) => ({
    ...product,
    name: locale === "lt" ? product.name_lt : product.name_en, // Localized name
    productType: productTypes
      ? locale === "lt"
        ? productTypes[product.typeId as string]?.name_lt
        : productTypes[product.typeId as string]?.name_en
      : "",
  }));

  useEffect(() => {
    setLoading(productsLoading || productTypes === null);
  }, [productsLoading, productTypes]);

  useEffect(() => {
    if (productsError) {
      setError(productsError);
    }
  }, [productsError]);

  return { data: combinedData, loading, error };
}
