import { FirebaseOptions } from "firebase/app";

export const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const brandsCollection =
  process.env.NEXT_PUBLIC_FIRESTORE_BRANDS_COLLECTION || "";
export const ordersCollection =
  process.env.NEXT_PUBLIC_FIRESTORE_ORDERS_COLLECTION || "";
export const productTypesCollection =
  process.env.NEXT_PUBLIC_FIRESTORE_PRODUCT_TYPES_COLLECTION || "";
export const productsCollection =
  process.env.NEXT_PUBLIC_FIRESTORE_PRODUCTS_COLLECTION || "";
export const promotionalBannersCollection =
  process.env.NEXT_PUBLIC_FIRESTORE_PROMOTIONAL_BANNERS_COLLECTION || "";
export const reviewsCollection =
  process.env.NEXT_PUBLIC_FIRESTORE_REVIEWS_COLLECTION || "";
export const servicesCollection =
  process.env.NEXT_PUBLIC_FIRESTORE_SERVICES_COLLECTION || "";
export const usersCollection =
  process.env.NEXT_PUBLIC_FIRESTORE_USERS_COLLECTION || "";
