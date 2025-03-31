import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6VxMLhw4g1VahPFoFLPf76h3hgnR6s6A",
  authDomain: "pet-chat-67a08.firebaseapp.com",
  projectId: "pet-chat-67a08",
  storageBucket: "pet-chat-67a08.appspot.com",
  messagingSenderId: "894902788354",
  appId: "1:894902788354:web:733b5a6563722577ef621b",
  measurementId: "G-ECCYYNXNZM",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
