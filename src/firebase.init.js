// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBWLvM8tpHoo2mIti2enDXr4eobGfSBs0",
    authDomain: "ecommercesite-emajohn.firebaseapp.com",
    projectId: "ecommercesite-emajohn",
    storageBucket: "ecommercesite-emajohn.appspot.com",
    messagingSenderId: "614384617704",
    appId: "1:614384617704:web:46c196fbc4fa2f0959615d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;