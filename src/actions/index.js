import firebase, { auth } from '../config/firebase';
import { handleExistingEmailError } from '../functions/authFunctions';

export const login = provider => dispatch => {
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
    auth
      .signInWithPopup(provider)
      .then(({ user, credential }) => {
        auth.signInAndRetrieveDataWithCredential(credential);
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
