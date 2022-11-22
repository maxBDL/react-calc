import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBM1sjWdp3Rf3g8fqRV7tjbqL0WGO53U_s",
  authDomain: "ynov-test-m2.firebaseapp.com",
  projectId: "ynov-test-m2",
  storageBucket: "ynov-test-m2.appspot.com",
  messagingSenderId: "531879713378",
  appId: "1:531879713378:web:50d4ae20853a79a7dacf3b",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)   
