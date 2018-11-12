import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config={
    apiKey: "*",
    authDomain: "*",
    databaseURL: "*",
    projectId: "livebuddy-app",
    storageBucket: "*",
    messagingSenderId: "622683454448"
};

firebase.initializeApp(config);

export default firebase;