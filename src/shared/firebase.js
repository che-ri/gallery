// Firebase App
import firebase from "firebase/app";

// Firebase products
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCwwZJRQmRbXdDnwVgy919DRw_i7g_ePEE",
    authDomain: "image-community-d3a1e.firebaseapp.com",
    projectId: "image-community-d3a1e",
    storageBucket: "image-community-d3a1e.appspot.com",
    messagingSenderId: "181561193175",
    appId: "1:181561193175:web:791498878e265db8dc3692",
    measurementId: "G-1PM0P33Z3T",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//조금 편하게 쓰기 위하여 미리 지정해두고 export 해줍니다. :-)
const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();

export { auth, apiKey, firestore };
