import db from "./firebaseInit";
import { doc, setDoc } from "firebase/firestore";

interface FirestoreDocument {
  id: string; // Each document should have an 'id' field
  [key: string]: any; // Flexible to accommodate different document structures
}

/**
 * Add multiple documents to a specified collection in Firestore.
 *
 * @param {string} collectionName - The name of the collection.
 * @param {FirestoreDocument[]} documentsArray - The array of documents to be added.
 */
export const addDocumentsToCollection = async (
  collectionName: string,
  documentsArray: FirestoreDocument[]
) => {
  const addPromises = documentsArray.map(async (documentData) => {
    const { id, ...data } = documentData; // Destructure the id and the rest of the data
    try {
      const docRef = doc(db, collectionName, id);
      await setDoc(docRef, data);
      console.log("Document written with ID: ", id);
    } catch (e) {
      console.error("Error adding document:", id, e);
    }
  });

  // Wait for all add operations to complete
  await Promise.all(addPromises);
};
