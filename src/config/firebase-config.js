// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL_c6rAEXQZFm0Ba4UDKC3_Ntn5Heazp8",
  authDomain: "expense-tracker-4a16b.firebaseapp.com",
  projectId: "expense-tracker-4a16b",
  storageBucket: "expense-tracker-4a16b.appspot.com",
  messagingSenderId: "279765371137",
  appId: "1:279765371137:web:d37ba69785711d1ca43300",
  measurementId: "G-RH0KS7VNQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
const analytics = getAnalytics(app);


//firebase login
//firebase init
//firebase deploy