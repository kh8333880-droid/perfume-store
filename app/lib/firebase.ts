import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0qfynPksfRC_XQNpZ2vAtUadV6XlMacc",
  authDomain: "perfume-store-ade71.firebaseapp.com",
  projectId: "perfume-store-ade71",
  storageBucket: "perfume-store-ade71.firebasestorage.app",
  messagingSenderId: "1090354523273",
  appId: "1:1090354523273:web:8ab993ea6f22ebbba9ea58",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);