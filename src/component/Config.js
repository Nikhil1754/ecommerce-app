// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPQ4yeN_HRW7vhAQM-aRmfAVFRtl8JG2I",
  authDomain: "ecommerceapp-38713.firebaseapp.com",
  projectId: "ecommerceapp-38713",
  storageBucket: "ecommerceapp-38713.appspot.com",
  messagingSenderId: "338133099050",
  appId: "1:338133099050:web:16f0d442a13b0bc9b4d953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
