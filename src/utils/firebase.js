import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQYx6PGz0A6CXKD1RAfjfsZj3WNr8b95w",
  authDomain: "waveflixgpt.firebaseapp.com",
  projectId: "waveflixgpt",
  storageBucket: "waveflixgpt.appspot.com",
  messagingSenderId: "294902240084",
  appId: "1:294902240084:web:116bd814aaf1741d9a2ec1",
  measurementId: "G-9CBGNGVYRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();