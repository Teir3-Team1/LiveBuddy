import firebase from '../config/firebase';
import { LOGIN } from './types';

export const login = provider => dispatch => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(({ user }) => {
      console.log(user);
      dispatch({
        type: LOGIN,
        userId: user.uid
      });
    });
};
