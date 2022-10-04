// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxprBxo3ZTjNiUXgZlncz7lEz0NOobDic",
  authDomain: "quotes-keeper-a4d2f.firebaseapp.com",
  projectId: "quotes-keeper-a4d2f",
  storageBucket: "quotes-keeper-a4d2f.appspot.com",
  messagingSenderId: "108720438022",
  appId: "1:108720438022:web:6f3b5f45c3ec49b8dc7c87",
  measurementId: "G-39WXG0R72S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore(app)