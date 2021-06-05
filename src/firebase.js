import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnbc6HYOlZ4_SeWDFO_FBnpkJ2igBHxEE",
  authDomain: "chatify-ed6cb.firebaseapp.com",
  projectId: "chatify-ed6cb",
  storageBucket: "chatify-ed6cb.appspot.com",
  messagingSenderId: "675539815640",
  appId: "1:675539815640:web:6e2e9390a355a73d881bad"

  };
  
const firebaseInstance = firebase.initializeApp(firebaseConfig);
const db = firebaseInstance.firestore();
const auth = firebase.auth();
const analytics = firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, db, analytics, provider, storage };
