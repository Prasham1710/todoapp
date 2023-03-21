// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3XJ4MjSEJZinsSADCq0Xxep6VSvGIbnA",
  authDomain: "todo-app-30717.firebaseapp.com",
  projectId: "todo-app-30717",
  storageBucket: "todo-app-30717.appspot.com",
  messagingSenderId: "168888656546",
  appId: "1:168888656546:web:59dc99eaf64c8d75816dfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)