import firebase, {
  googleAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
  githubAuthProvider
} from '../config/firebase';
import {
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_TWITTER,
  LOGIN_WITH_GITHUB
} from './types';

export const loginWithGoogle = () => dispatch => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      console.log(user);
      dispatch({
        type: LOGIN_WITH_GOOGLE,
        userId: user.uid
      });
    });
};

export const loginWithFacebook = () => dispatch => {
  firebase
    .auth()
    .signInWithPopup(facebookAuthProvider)
    .then(({ user }) => {
      console.log(user);
      dispatch({
        type: LOGIN_WITH_FACEBOOK,
        userId: user.uid
      });
    });
};

export const loginWithTwitter = () => dispatch => {
  firebase
    .auth()
    .signInWithPopup(twitterAuthProvider)
    .then(({ user }) => {
      console.log(user);
      dispatch({
        type: LOGIN_WITH_TWITTER,
        userId: user.uid
      });
    });
};

export const loginWithGithub = () => dispatch => {
  firebase
    .auth()
    .signInWithPopup(githubAuthProvider)
    .then(({ user }) => {
      console.log(user);
      dispatch({
        type: LOGIN_WITH_GITHUB,
        userId: user.uid
      });
    });
};
