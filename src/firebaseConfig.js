// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB628ac3JKuy41uJZg9wh7wds1Ew3L8-Fg",
  authDomain: "inetmagazzz.firebaseapp.com",
  projectId: "inetmagazzz",
  storageBucket: "inetmagazzz.firebasestorage.app",
  messagingSenderId: "527140560492",
  appId: "1:527140560492:web:c65ca5c05da0fff97e8249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);