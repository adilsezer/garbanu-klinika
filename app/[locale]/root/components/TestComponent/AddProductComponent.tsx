"use client";
import React from "react";
import { addProduct } from "@lib/firebase/firestoreService"; // import the addProduct function
import { Timestamp } from "firebase/firestore";

const AddProductComponent = () => {
  const dummyProductData = {
    attributes: { volume: "300ml" },
    brandId: "brand-natural-waves",
    createdAt: Timestamp.fromDate(new Date()),
    imageURLs: [
      "https://firebasestorage.googleapis.com/v0/b/garbanu-klinika-e5174.appspot.com/o/product-type-images%2Fshampoo.jpg?alt=media&token=0a17e316-2b68-493e-a744-48fabe18a14a",
    ],
    localization: {
      en: {
        detailedDescription: "A gentle shampoo for curly hair.",
        name: "Organic Curly Shampoo",
        shortDescription: "Nourish your curls.",
      },
      lt: {
        detailedDescription: "Švelnus šampūnas garbanotiems plaukams.",
        name: "Organinis Garbanotų Plaukų Šampūnas",
        shortDescription: "Maitinkite savo garbanas.",
      },
    },
    price: 15.99,
    stock: 20,
    tags: ["organic", "shampoo", "curls"],
    typeId: "type-shampoo",
    updatedAt: Timestamp.fromDate(new Date()),
  };

  function generateRandomId(prefix: string): string {
    const randomPart =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    return `${prefix}-${randomPart}`;
  }

  const handleAddProduct = async () => {
    const productId = generateRandomId("prod-organic-curly-shampoo");
    await addProduct(productId, dummyProductData)
      .then(() => console.log("Product added successfully"))
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <div>
      <button onClick={handleAddProduct}>Add Dummy Product</button>
    </div>
  );
};

export default AddProductComponent;
