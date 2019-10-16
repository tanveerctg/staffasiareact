import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBljxluWBahr-f_pPByXh-00hap5UVEXPc",
  authDomain: "staffasia-fbb28.firebaseapp.com",
  databaseURL: "https://staffasia-fbb28.firebaseio.com",
  projectId: "staffasia-fbb28",
  storageBucket: "staffasia-fbb28.appspot.com",
  messagingSenderId: "603900549731",
  appId: "1:603900549731:web:ede73d0d5b554dcaedb656"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database };
