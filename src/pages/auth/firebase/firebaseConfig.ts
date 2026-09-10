// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtNwF0lr81KMTcilTcb9C95zPnmw7NSWE",
  authDomain: "linksharing-7cb5f.firebaseapp.com",
  projectId: "linksharing-7cb5f",
  storageBucket: "linksharing-7cb5f.firebasestorage.app",
  messagingSenderId: "782347806559",
  appId: "1:782347806559:web:7c4bf964c4b9070e2a78ea",
  measurementId: "G-33G34R8HS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
