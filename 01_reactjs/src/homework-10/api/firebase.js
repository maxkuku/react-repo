import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOwQga7aoKc01oRhVYxosOliY1Y4ea2UY",
    authDomain: "react-lesson-9.firebaseapp.com",
    databaseURL: "https://react-lesson-9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-lesson-9",
    storageBucket: "react-lesson-9.appspot.com",
    messagingSenderId: "851842330844",
    appId: "1:851842330844:web:e2b5e8d5bec27dc154c419"
};


firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const db = firebase.database();
export const rootRef = db.ref("root");
export const chatsRef = rootRef.child("chats");
export const messagesRef = rootRef.child("messages");

