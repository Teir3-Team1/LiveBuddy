import firebase, { googleAuthProvider } from '../config/firebase';
import { LOGIN_WITH_GOOGLE } from './types';

export const loginWithGoogle = () => dispatch => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch({
        type: LOGIN_WITH_GOOGLE,
        userId: user.uid
      });
    });
};
