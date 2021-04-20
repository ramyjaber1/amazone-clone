import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDAKM78hrLLNaezyTo-DopTsWY_xQ2-g9M",
  authDomain: "clone-5a5a9.firebaseapp.com",
    databaseURL: "https://clone-5a5a9.firebaseio.com",
    projectId: "clone-5a5a9",
    storageBucket: "clone-5a5a9.appspot.com",
    messagingSenderId: "347666065267",
    appId: "1:347666065267:web:f50bc6c20b6b2300088706",
    measurementId: "G-Z5W2J2VRR4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };