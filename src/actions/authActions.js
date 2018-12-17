import firebase, { auth } from '../config/firebase';
import { handleExistingEmailError } from '../functions/authFunctions';

import { addUser } from '../functions/dbFunctions';
import { LOGIN, LOGOUT } from './types';
import  { history } from '../components/App';

export const login = provider => dispatch => {
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
    auth
      .signInWithPopup(provider)
      .then(({ user, additionalUserInfo }) => {
      
        if (additionalUserInfo.isNewUser) {
          addUser(user);
        }
        // Login in Store
        dispatch({
          type:LOGIN,
          payload:user
        });
        history.push('/');
    
      })
      .catch(error => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          handleExistingEmailError(error);
        }
      });
  });
};

export const logout = () => dispatch => {
   // Remove Current User from Store
  dispatch({
    type:LOGOUT,
  });
  auth.signOut();
 
};
