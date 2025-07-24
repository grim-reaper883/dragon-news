// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDopGZDQukmJO4ZR0KzS6TI95sx2Yz8cEc",
  authDomain: "dragon-news-772ec.firebaseapp.com",
  projectId: "dragon-news-772ec",
  storageBucket: "dragon-news-772ec.firebasestorage.app",
  messagingSenderId: "117089936729",
  appId: "1:117089936729:web:3c471706c25b051d4bd848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;