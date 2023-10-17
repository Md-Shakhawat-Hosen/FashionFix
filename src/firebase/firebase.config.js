// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcH3WX91g3lHM9BD5B-XAqvGQ7IgTYI1g",
  authDomain: "fashion-client-shakhawat.firebaseapp.com",
  projectId: "fashion-client-shakhawat",
  storageBucket: "fashion-client-shakhawat.appspot.com",
  messagingSenderId: "1073646544249",
  appId: "1:1073646544249:web:94c0c1442456edc13b3ba8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
