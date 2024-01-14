// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'; // import the main module
import 'firebase/compat/auth'; // import authentication
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCHAcJ9A0A0Ty7wZdPAbDlP6m1CuDGhhLQ",
  authDomain: "chitthi-34bce.firebaseapp.com",
  // databaseURL: "https://chitthi-34bce-default-rtdb.firebaseio.com",
  projectId: "chitthi-34bce",
  storageBucket: "chitthi-34bce.appspot.com",
  messagingSenderId: "752594645492",
  appId: "1:752594645492:web:c268a875bf2e87d1d909a1",
  measurementId: "G-LQJJ8ELGYN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;