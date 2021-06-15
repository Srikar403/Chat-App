import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyAl8uTo6dbEK8M_1NXrOk4twnEoni0v2fI",
  authDomain: "chatting-1dbbd.firebaseapp.com",
  projectId: "chatting-1dbbd",
  storageBucket: "chatting-1dbbd.appspot.com",
  messagingSenderId: "542510346991",
  appId: "1:542510346991:web:9311af7458415a7db0e11a"
  }).auth();