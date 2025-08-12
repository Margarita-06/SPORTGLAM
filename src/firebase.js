import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBytqyanKSjkmxeGuII4chF2ATLAtJWYnE",
  authDomain: "sportglam-2563f.firebaseapp.com",
  projectId: "sportglam-2563f",
  storageBucket: "sportglam-2563f.firebasestorage.app",
  messagingSenderId: "193590381506",
  appId: "1:193590381506:web:aae4191dd9a0fe95b2645b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//Firestore
const db = getFirestore(app);

export { auth, googleProvider, db, signOut };