import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA09_xiMk6cG2Yk164Uo9cK0hFwpSGtppA",
    authDomain: "slack-clone-challenge-be972.firebaseapp.com",
    projectId: "slack-clone-challenge-be972",
    storageBucket: "slack-clone-challenge-be972.appspot.com",
    messagingSenderId: "666367007460",
    appId: "1:666367007460:web:a74815b42366ea0b796af1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db;