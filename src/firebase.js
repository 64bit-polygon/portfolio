import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
import firebaseConfig from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const content = collection(db, import.meta.env.VITE_FB_DB_COLLECTION);
export default content;