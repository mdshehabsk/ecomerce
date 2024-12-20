// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATxWOfeq0dvjZP-dUGDPgEojgdzR3uzwI",
  authDomain: "auth-with-firebase-52527.firebaseapp.com",
  projectId: "auth-with-firebase-52527",
  storageBucket: "auth-with-firebase-52527.firebasestorage.app",
  messagingSenderId: "1023933065131",
  appId: "1:1023933065131:web:bf1b13885419044cf794ee",
  measurementId: "G-B207YBB727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)


export {auth}