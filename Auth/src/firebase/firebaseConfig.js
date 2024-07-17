// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8Ii8nNoZrKw1KLAOqvyiu9t-rCjs-mZ8",
  authDomain: "paymorz-31dde.firebaseapp.com",
  projectId: "paymorz-31dde",
  storageBucket: "paymorz-31dde.appspot.com",
  messagingSenderId: "956308195609",
  appId: "1:956308195609:web:3c140ccf17c87ae6a29d88"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)

export default firebaseApp;