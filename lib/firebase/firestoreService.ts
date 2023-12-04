import db from "./firebaseInit";
import firebase from "firebase/compat/app";
import { doc, setDoc } from "firebase/firestore";

interface Product {
  attributes: {
    volume: string;
  };
  brandId: string;
  createdAt: firebase.firestore.Timestamp;
  imageURLs: string[];
  localization: {
    en: {
      detailedDescription: string;
      name: string;
      shortDescription: string;
    };
    lt: {
      detailedDescription: string;
      name: string;
      shortDescription: string;
    };
  };
  price: number;
  stock: number;
  tags: string[];
  typeId: string;
  updatedAt: firebase.firestore.Timestamp;
}

export const addProduct = async (productId: string, product: Product) => {
  try {
    const docRef = doc(db, "products", productId);
    await setDoc(docRef, product);
    console.log("Document written with ID: ", productId);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
