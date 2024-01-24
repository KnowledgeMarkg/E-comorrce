import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTaZFT2lQmDzGFyb5WA8acze7fh9y5WLM",
  authDomain: "myecommorce-1a12c.firebaseapp.com",
  projectId: "myecommorce-1a12c",
  storageBucket: "myecommorce-1a12c.appspot.com",
  messagingSenderId: "1056958376441",
  appId: "1:1056958376441:web:e8222ca0c03927b6397528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}