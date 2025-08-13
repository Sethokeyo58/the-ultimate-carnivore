// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgEEJnrw41nivT-l9IiVLE_Lzq4Rkw8aI",
  authDomain: "the-ultimate-carnivore.firebaseapp.com",
  projectId: "the-ultimate-carnivore",
  storageBucket: "the-ultimate-carnivore.firebasestorage.app",
  messagingSenderId: "314932218908",
  appId: "1:314932218908:web:a02b4ea8bd48f1d6c5a3d9",
  measurementId: "G-BN663LW3DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);