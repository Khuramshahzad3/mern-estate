// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-project-480db.firebaseapp.com",
  projectId: "mern-estate-project-480db",
  storageBucket: "mern-estate-project-480db.appspot.com",
  messagingSenderId: "791137575705",
  appId: "1:791137575705:web:b373ec7070cf7c39121b88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);