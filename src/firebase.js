//import firebase from 'firebase/app'
import 'firebase/storage'
import * as fire from "firebase";
import "firebase/firestore";
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB7qv8LW7aU2zw_ILaxDJOQraIlzohoqts",
    authDomain: "project-720e4.firebaseapp.com",
    databaseURL: "https://project-720e4-default-rtdb.firebaseio.com",
    projectId: "project-720e4",
    storageBucket: "project-720e4.appspot.com",
    messagingSenderId: "282283764643",
    appId: "1:282283764643:web:8c7148d1aa395c5dde0816",
    measurementId: "G-4SHVWJL9D1"
};

// Initialize Firebase
fire.initializeApp(firebaseConfig);
const storage = fire.storage()

//export default firebase.firestore();
var firebase1 = fire.firestore();

export  {
    storage, firebase1 as default
}


/*
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
const config = {
    apiKey: "AIzaSyC32lkjiyr7WcjmRU2HOdZ1G18wzSMiGD0",
    authDomain: "mi-mandadero.firebaseapp.com",
    databaseURL: "https://mi-mandadero-default-rtdb.firebaseio.com",
    projectId: "mi-mandadero",
    storageBucket: "mi-mandadero.appspot.com",
    messagingSenderId: "1055645118874",
    appId: "1:1055645118874:web:fa2b0093b05e6c8ada0a23"
};

// Initialize Firebase
firebase.initializeApp(config);
const storage = firebase.storage()

export  {
    storage, firebase as default
}
*/
//export default firebase.firestore();