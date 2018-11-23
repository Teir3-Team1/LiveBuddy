import firebase, { auth } from '../config/firebase';
import { LOGIN, LOGOUT } from './types';
import { existingEmailError } from '../functions/authFunctions';

export const login = provider => dispatch => {
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
    auth
      .signInWithPopup(provider)
      .then(({ user, credential }) => {
        auth.signInAndRetrieveDataWithCredential(credential);
        dispatch({
          type: LOGIN,
          userId: user.uid
        });
      })
      .catch(error => existingEmailError(error));
  });
};

export const logout = () => dispatch => {
  auth.signOut().then(() =>
    dispatch({
      type: LOGOUT
    })
  );
};
