import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAQdDo_HQGZEYz7NXw0Uss1t-CBq0-9G94",
    authDomain: "react-app-7d2cd.firebaseapp.com",
    projectId: "react-app-7d2cd",
    storageBucket: "react-app-7d2cd.appspot.com",
    messagingSenderId: "143755038611",
    appId: "1:143755038611:web:5dbe21477aaf6322832266",
    measurementId: "G-56HL8WFX28"
})

const auth = app.auth()
const firestore = app.firestore()
const storage = app.storage()
export { app, auth, firestore, storage }