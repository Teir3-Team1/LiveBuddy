import firebase, { auth } from '../config/firebase';
import { handleExistingEmailError } from '../functions/authFunctions';

import { addUser } from '../functions/dbFunctions';

export const login = provider => dispatch => {
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
    auth
      .signInWithPopup(provider)
      .then(({ user, additionalUserInfo }) => {
        if (additionalUserInfo.isNewUser) {
          addUser(user);
        }
      })
      .catch(error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          handleExistingEmailError(error);
        }
      });
  });
};

export const logout = () => dispatch => {
  auth.signOut();
};
