import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: AIzaSyBkSQB7cRRcQ2ccT4u3l5AYZU0onNgUWQ4,
  authDomain: netflix - b731c.firebaseapp.com,
  projectId: netflix - b731c,
  storageBucket: netflix - b731c.appspot.com,
  messagingSenderId: 16722214161,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
