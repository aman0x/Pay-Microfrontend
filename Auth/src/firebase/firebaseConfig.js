// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnPiEQs12h6jxkjKncpVoLhgnHUxzls0o",
  authDomain: "paymorz-425412.firebaseapp.com",
  projectId: "paymorz-425412",
  storageBucket: "paymorz-425412.appspot.com",
  messagingSenderId: "635887983795",
  appId: "1:635887983795:web:2acbbcf0e8a7b1f760a4c6",
  measurementId: "G-BB3M8P1F8B"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)

export default firebaseApp;