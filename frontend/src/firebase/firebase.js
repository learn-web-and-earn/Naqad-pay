// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase project config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBsLGgDY-WgrWcPkGrPNtpHEsK_wevTDTA",
  authDomain: "khan7a7-c3b2c.firebaseapp.com",
  databaseURL: "https://khan7a7-c3b2c-default-rtdb.firebaseio.com",
  projectId: "khan7a7-c3b2c",
  storageBucket: "khan7a7-c3b2c.firebasestorage.app",
  messagingSenderId: "65185723753",
  appId: "1:65185723753:web:c46a721f320bf3ef4179f8",
  measurementId: "G-1JQNGH2QPC"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
