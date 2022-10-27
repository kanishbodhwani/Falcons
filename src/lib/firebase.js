import { initializeApp } from "firebase/app";
import { getAuth , signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import {doc, setDoc, getFirestore , FieldValue , addDoc, collection, Timestamp} from "firebase/firestore";

// config
const config = {
  apiKey: "AIzaSyDKu83eVn9GpsPIHDIvgjXhqx-MpDPtbBU",
  authDomain: "falcons-80338.firebaseapp.com",
  projectId: "falcons-80338",
  storageBucket: "falcons-80338.appspot.com",
  messagingSenderId: "116823588996",
  appId: "1:116823588996:web:c91b0d01219ac21f1502d1",
  measurementId: "G-STV8RXGPSY"
};

const firebase = initializeApp(config);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {Timestamp, doc, setDoc, addDoc, collection, db , auth , FieldValue, onAuthStateChanged};
  

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;    
  } catch (err) {
    console.error(err);
    return;
  }
};

export const signout = async () => {
  signOut(auth)
    .then(() => {
      // success
      console.log("Logout")
    }).catch(err => {
      console.error(err);
    })
}