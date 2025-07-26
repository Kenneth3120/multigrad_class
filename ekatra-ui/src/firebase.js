// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBph9y5ieyTNDl2ygmTk_WSCAO8mlhvwng",
  authDomain: "ekatra-ai-35d6e.firebaseapp.com",
  projectId: "ekatra-ai-35d6e",
  storageBucket: "ekatra-ai-35d6e.firebasestorage.app",
  messagingSenderId: "263904598549",
  appId: "1:263904598549:web:ae6c6cc99534bc55934c1c",
  measurementId: "G-YPKY7V45L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);