// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqKb5MHC0-e73n4PV0CxIqdvef1BBRPUE",
  authDomain: "react-firebase-auth-9dd3e.firebaseapp.com",
  projectId: "react-firebase-auth-9dd3e",
  storageBucket: "react-firebase-auth-9dd3e.appspot.com",
  messagingSenderId: "291585760116",
  appId: "1:291585760116:web:d64af4137583390d9b6a21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app