import firebase from '../config/firebase';
import { LOGIN, LOGOUT } from './types';

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

export const logout = () => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(() =>
      dispatch({
        type: LOGOUT
      })
    );
};
