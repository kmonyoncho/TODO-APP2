import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBbkrKIrBNGZcBjrm3Z2OrNRJig27IBRdU",
    authDomain: "todo-app-3f78e.firebaseapp.com",
    projectId: "todo-app-3f78e",
    storageBucket: "todo-app-3f78e.appspot.com",
    messagingSenderId: "194823336829",
    appId: "1:194823336829:web:87724622df45ac174b5214",
    measurementId: "G-83JHJQLEGS"

});

const db= firebaseApp.firestore();
export default db;