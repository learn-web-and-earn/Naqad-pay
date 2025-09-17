import { collection, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";

const collectionName = "naqad";
const STORAGE_KEY = "allbanksapp_session_doc_id";

export const getDocId = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

export const setDocIdPersist = (id) => {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch (error) {
    console.warn("Failed to persist doc ID:", error);
  }
};

export const clearDocId = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  }catch (error) {
    console.warn("Failed to persist doc ID:", error);
  }
};

const getOrCreateDocRef = () => {
  let id = getDocId();
  if (!id) {
    const ref = doc(collection(db, collectionName));
    id = ref.id;
    setDocIdPersist(id);
    return ref;
  }
  return doc(collection(db, collectionName), id);
};

export const uploadData = async (payload = {}) => {
  try {
    console.log("Starting Firebase upload with payload:", payload);

    const existingId = getDocId();
    const ref = getOrCreateDocRef();

    const dataToWrite = existingId
      ? { ...payload }
      : { timestamp: Date.now(), ...payload };

    console.log("Data to write:", dataToWrite);
    console.log("Document reference path:", ref.path);

    await setDoc(ref, dataToWrite, { merge: true });

    console.log("Firebase upload successful! Document ID:", ref.id);

    return ref.id;
  } catch (error) {
    console.error("Firebase upload failed!", {
      error: error.message,
      code: error.code,
      details: error,
      payload: payload,
    });
    throw error;
  }
};

export const uploadFile = async (file) => {
  const storageRef = ref(storage, `files/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export const setExistingDocId = (id) => {
  if (id && typeof id === "string") setDocIdPersist(id);
  return getDocId();
};
