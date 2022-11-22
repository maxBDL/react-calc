import React from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut,
} from "firebase/auth";
import {
  getFirestore, query, getDocs, collection, where, addDoc,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Components/Login";
// import { LockClosedIcon } from '@heroicons/react/20/solid'
const App = () => {
  async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

  return (
    <div>
      {/* <Login></Login> */}

      getCities()
    </div>

  );
};

export default App;