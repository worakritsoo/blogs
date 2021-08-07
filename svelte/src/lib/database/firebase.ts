import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "worrrrrrcloud.firebaseapp.com",
  projectId: "worrrrrrcloud",
  storageBucket: "worrrrrrcloud.appspot.com",
  messagingSenderId: "752983486732",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-CPEQWWLH2G",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
