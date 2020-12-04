import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpCnEOthn_753XHnNrUMJz9vjaB-sA_8Q",
  authDomain: "facebook-messenger-cloning.firebaseapp.com",
  databaseURL: "https://facebook-messenger-cloning.firebaseio.com",
  projectId: "facebook-messenger-cloning",
  storageBucket: "facebook-messenger-cloning.appspot.com",
  messagingSenderId: "944239189190",
  appId: "1:944239189190:web:d447c14409bfce742f0bc7",
  measurementId: "G-QPDF1Y6FZF",
});

const db = firebaseApp.firestore();
export default db;
