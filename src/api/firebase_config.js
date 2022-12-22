import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALxK3aoNUj4cvNQFYXyItr0JalmIr5QvI",
  authDomain: "maerskdemo-7103c.firebaseapp.com",
  projectId: "maerskdemo-7103c",
  storageBucket: "maerskdemo-7103c.appspot.com",
  messagingSenderId: "398839909357",
  appId: "1:398839909357:web:083e66265305f9314a35e4",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);