// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ_uobzbMDOHMiNsYMl4pKX7B6DGf1CWk",
  authDomain: "solent-faces.firebaseapp.com",
  projectId: "solent-faces",
  storageBucket: "solent-faces.appspot.com",
  messagingSenderId: "64917291568",
  appId: "1:64917291568:web:607d5ad671e7c7d01ca3f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();