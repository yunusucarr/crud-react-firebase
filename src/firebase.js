import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcFAqeUUL8a7QSyIj9D-AY7kfYiUz-cUE",
  authDomain: "crud-react-9ffca.firebaseapp.com",
  databaseURL: "https://crud-react-9ffca-default-rtdb.firebaseio.com",
  projectId: "crud-react-9ffca",
  storageBucket: "crud-react-9ffca.appspot.com",
  messagingSenderId: "1074929130209",
  appId: "1:1074929130209:web:4668a6e4b092fb008b35a0"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();