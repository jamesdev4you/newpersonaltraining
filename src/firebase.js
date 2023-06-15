import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPga2guvv3794egFVXetBKIZ-WS3gJvvE",
  authDomain: "edvania-s-personal-training.firebaseapp.com",
  projectId: "edvania-s-personal-training",
  storageBucket: "edvania-s-personal-training.appspot.com",
  messagingSenderId: "658459206465",
  appId: "1:658459206465:web:a1a8c70eb2c15bcb2077c0",
  measurementId: "G-YVJZ4N1V9L",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
