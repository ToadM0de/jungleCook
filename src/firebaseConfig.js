// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhA8wC6yXdCbl8dlgpG_LSK6r3xZFeT5Q",
  authDomain: "junglecookhw.firebaseapp.com",
  projectId: "junglecookhw",
  storageBucket: "junglecookhw.firebasestorage.app",
  messagingSenderId: "801723876633",
  appId: "1:801723876633:web:e3f328b7ad6cb74f0db188",
  measurementId: "G-QM9XR7XCLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);