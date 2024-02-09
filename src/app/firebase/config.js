// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2A-Hha3x1Y1zse4gwOE8f-AmdaBI45qY",
  authDomain: "bord-7e5dd.firebaseapp.com",
  projectId: "bord-7e5dd",
  storageBucket: "bord-7e5dd.appspot.com",
  messagingSenderId: "595531088684",
  appId: "1:595531088684:web:352d3da52dfceafc952289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 