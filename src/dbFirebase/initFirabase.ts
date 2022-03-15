// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
const { initializeApp } = require('firebase/app');
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0CTQZr9UzVQNG1L-lEhQCqzSBoPsJBok",
  authDomain: "lineaprofundizacion2.firebaseapp.com",
  projectId: "lineaprofundizacion2",
  storageBucket: "lineaprofundizacion2.appspot.com",
  messagingSenderId: "1090008750911",
  appId: "1:1090008750911:web:dcc8849f6eeed2f1d4d18a",
  measurementId: "G-K1EJLKRHHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


