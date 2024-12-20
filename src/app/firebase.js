// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq2JSd0IybuYoT8ou-GCPlbD3MLaqjK-E",
  authDomain: "auth-b411b.firebaseapp.com",
  projectId: "auth-b411b",
  storageBucket: "auth-b411b.appspot.com",
  messagingSenderId: "302783490798",
  appId: "1:302783490798:web:0c15ca8eef39ef5516e1ff",
  measurementId: "G-K4B67T6T5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;