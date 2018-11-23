import firebase, { auth } from '../config/firebase';
import { existingEmailError } from '../functions/authFunctions';

export const login = provider => dispatch => {
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
    auth
      .signInWithPopup(provider)
      .then(({ user, credential }) => {
        auth.signInAndRetrieveDataWithCredential(credential);
      })
      .catch(error => existingEmailError(error));
  });
};

export const logout = () => dispatch => {
  auth.signOut();
};
