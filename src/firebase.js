import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNtkFjYZlOZe7yQVzNgWfjg58yBsMsz34",
    authDomain: "netflix-f585f.firebaseapp.com",
    projectId: "netflix-f585f",
    storageBucket: "netflix-f585f.firebasestorage.app",
    messagingSenderId: "510976539149",
    appId: "1:510976539149:web:08116eab9d1cbb8934f344",
    measurementId: "G-7LFD94W133"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
