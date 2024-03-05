// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ3V7sQUXSteM1HNPRDbNSgxqTslF2oOY",
  authDomain: "netflixgpt-4e271.firebaseapp.com",
  projectId: "netflixgpt-4e271",
  storageBucket: "netflixgpt-4e271.appspot.com",
  messagingSenderId: "539524482868",
  appId: "1:539524482868:web:edb62fa90483cc933bc761",
  measurementId: "G-F76DHX6EZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();