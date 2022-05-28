import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxKNS1vCQYw4VYHgU8-3H3SVG3t5koJ6A",
  authDomain: "react-crud-6c8cc.firebaseapp.com",
  databaseURL: "https://react-crud-6c8cc-default-rtdb.firebaseio.com",
  projectId: "react-crud-6c8cc",
  storageBucket: "react-crud-6c8cc.appspot.com",
  messagingSenderId: "56349619664",
  appId: "1:56349619664:web:bf634ef150ee8e2a1df5d5"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();