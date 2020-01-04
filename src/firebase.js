import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDngu7rI_l2cveK3mf2mJoqw-yH2kGOoHc",
  authDomain: "todos-3ff23.firebaseapp.com",
  databaseURL: "https://todos-3ff23.firebaseio.com",
  projectId: "todos-3ff23",
  storageBucket: "todos-3ff23.appspot.com",
  messagingSenderId: "949263116458",
  appId: "1:949263116458:web:686f7c3e1a6e8a590308d3"
});

export { firebaseConfig as firebase };
