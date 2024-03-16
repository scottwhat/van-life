// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkYn01oXjbFmVHrzrdsyMb1nLnd0d5QmU",
    authDomain: "notes-b1d7b.firebaseapp.com",
    projectId: "notes-b1d7b",
    storageBucket: "notes-b1d7b.appspot.com",
    messagingSenderId: "663112509191",
    appId: "1:663112509191:web:c81f784be5b13f722c47a2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")
