// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm-hcPxkiyc7zzjyr0Wm9GBxOiqZIqp-k",
  authDomain: "mern-real-estate-8a6a1.firebaseapp.com",
  projectId: "mern-real-estate-8a6a1",
  storageBucket: "mern-real-estate-8a6a1.appspot.com",
  messagingSenderId: "414987423278",
  appId: "1:414987423278:web:aa95a9f2a741fa77b959bf",
  measurementId: "G-XHW7XHZEK6"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);