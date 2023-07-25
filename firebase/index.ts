// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGgoOoPSgoUVpx8AR1oPj_2NiBjceg-qc",
  authDomain: "zokirdevblog.firebaseapp.com",
  databaseURL: "https://zokirdevblog-default-rtdb.firebaseio.com",
  projectId: "zokirdevblog",
  storageBucket: "zokirdevblog.appspot.com",
  messagingSenderId: "288960090969",
  appId: "1:288960090969:web:b5fbacfdd8a055dc0f7248",
  measurementId: "G-BLXFG5FKRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);   

export default db;

