"use client";
import React from "react";
import { addDocumentsToCollection } from "@lib/firebase/firestoreService"; // import the addProduct function
import { Timestamp } from "firebase/firestore";

const AddServices = () => {
  // Data objects for each service
  const servicesData = [
    {
      id: "service-curly-hair-cutting",
      createdAt: Timestamp.fromDate(new Date("2023-12-17T21:22:43Z")),
      duration: 60,
      imageURLs: [
        "https://placeholder.image.url/curly-hair-cutting.jpg", // Placeholder URL
      ],
      localization: {
        en: {
          name: "CURLY HAIR CUTTING",
        },
        lt: {
          name: "GARBANŲ PLAUKŲ KIRPIMAS",
        },
      },
      price: 35,
      updatedAt: Timestamp.fromDate(new Date("2023-12-17T21:22:43Z")),
    },
    {
      id: "service-curly-hair-transformation",
      createdAt: Timestamp.fromDate(new Date("2023-12-17T21:22:50Z")),
      duration: 120,
      imageURLs: [
        "https://placeholder.image.url/curly-hair-transformation.jpg", // Placeholder URL
      ],
      localization: {
        en: {
          name: "CURLY HAIR TRANSFORMATION",
        },
        lt: {
          name: "GARBANŲ PLAUKŲ TRANSFORMACIJA",
        },
      },
      price: 75,
      updatedAt: Timestamp.fromDate(new Date("2023-12-17T21:22:50Z")),
    },
    {
      id: "service-procedures",
      createdAt: Timestamp.fromDate(new Date("2023-12-17T21:22:57Z")),
      duration: 30,
      imageURLs: [
        "https://placeholder.image.url/procedures.jpg", // Placeholder URL
      ],
      localization: {
        en: {
          name: "HAIR PROCEDURES",
        },
        lt: {
          name: "PLAUKŲ PROCEDŪROS",
        },
      },
      price: 50,
      updatedAt: Timestamp.fromDate(new Date("2023-12-17T21:22:57Z")),
    },
    {
      id: "service-washing-and-curly-hair-shaping",
      createdAt: Timestamp.fromDate(new Date("2023-12-17T21:22:43Z")),
      duration: 180,
      imageURLs: [
        "https://placeholder.image.url/washing-and-curly-hair-shaping.jpg", // Placeholder URL
      ],
      localization: {
        en: {
          name: "WASHING AND CURLY HAIR SHAPING",
        },
        lt: {
          name: "GARBANŲ PLAUKŲ PLOVIMAS IR FORMAVIMAS",
        },
      },
      price: 0, // The price is set to 0 in the image, assuming this is a placeholder or indicative of a free service.
      updatedAt: Timestamp.fromDate(new Date("2023-12-17T21:22:43Z")),
    },
  ];

  function generateRandomId(prefix: string): string {
    const randomPart =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    return `${prefix}-${randomPart}`;
  }

  const handleAddProduct = async () => {
    const productId = generateRandomId("prod");
    await addDocumentsToCollection("services", servicesData)
      .then(() => console.log("Product added successfully"))
      .catch((error) => console.error("Error adding product:", error));
  };

  return (
    <div>
      <button onClick={handleAddProduct}>Add Services</button>
    </div>
  );
};

export default AddServices;
