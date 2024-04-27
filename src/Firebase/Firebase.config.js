// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBwjSlx8uvspLUTf1aZLyE3RBlzvmuZCM",
  authDomain: "tourism-management-websi-220a9.firebaseapp.com",
  projectId: "tourism-management-websi-220a9",
  storageBucket: "tourism-management-websi-220a9.appspot.com",
  messagingSenderId: "649610657968",
  appId: "1:649610657968:web:e8e6197726313453c63b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;