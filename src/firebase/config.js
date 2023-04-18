import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2JnehoG0wXN6_andSCuomE1aJEaCw8OA",
    authDomain: "olx-clone-c7755.firebaseapp.com",
    projectId: "olx-clone-c7755",
    storageBucket: "olx-clone-c7755.appspot.com",
    messagingSenderId: "20374403709",
    appId: "1:20374403709:web:797a8e6fce784c0f428f14",
    measurementId: "G-MQVPVXF9JE"
  };

  export default firebase.initializeApp(firebaseConfig)