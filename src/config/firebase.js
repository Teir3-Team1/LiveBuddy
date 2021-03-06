import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: 'livebuddy-app',
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: '622683454448'
};

firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export const auth = firebase.auth();
export const database = firebase.database();

export const providers = [
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
  githubAuthProvider
];

export default firebase;
