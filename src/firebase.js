import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCBYfHeKVWh76uun74P9pCgr3tZz4Vhj8E",
    authDomain: "todo-app-b3fa6.firebaseapp.com",
    projectId: "todo-app-b3fa6",
    storageBucket: "todo-app-b3fa6.appspot.com",
    messagingSenderId: "1075489890751",
    appId: "1:1075489890751:web:db8ccda0f796ebb040410a",
    measurementId: "G-P7QDMRXG5Q"

});

const db= firebaseApp.firestore();
export default db;