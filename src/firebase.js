// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkObVpSjghGmwqbHUHHns1J2tMk0Wuono",
  authDomain: "rentitapp-8fc19.firebaseapp.com",
  projectId: "rentitapp-8fc19",
  storageBucket: "rentitapp-8fc19.appspot.com",
  messagingSenderId: "953170635360",
  appId: "1:953170635360:web:5befac64c8a740f200f105",
  measurementId: "G-H9WN6F3EFX"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const auth = getAuth(firebase);

export default firebase;