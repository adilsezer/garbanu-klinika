"use client";
import React from "react";
import { addProduct } from "@lib/firebase/firestoreService"; // import the addProduct function
import { Timestamp } from "firebase/firestore";

const AddProductComponent = () => {
  const dummyProductData = {
    attributes: { volume: "300ml" },
    brandId: "brand-natural-waves",
    createdAt: Timestamp.fromDate(new Date()),
    imageURLs: ["https://example.com/image1.jpg"],
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

  const handleAddProduct = async () => {
    const productId = "prod-organic-curly-shampoo2"; // Custom document ID
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
