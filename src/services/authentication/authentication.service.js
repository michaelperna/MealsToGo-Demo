import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAeYelgnaXnjv80uVrOgTgho6NxYMeqOys",
  authDomain: "mealstogo-39299.firebaseapp.com",
  projectId: "mealstogo-39299",
  storageBucket: "mealstogo-39299.appspot.com",
  messagingSenderId: "970247134550",
  appId: "1:970247134550:web:d9e883832de5670ecc4af7",
};
