import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNLJqfSbBuYayKa0epKPGNjTLsSKP5TME",
  authDomain: "chat-app-ed4a9.firebaseapp.com",
  projectId: "chat-app-ed4a9",
  storageBucket: "chat-app-ed4a9.firebasestorage.app",
  messagingSenderId: "375195282785",
  appId: "1:375195282785:web:76adacc017e7ed9ae6e920",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
