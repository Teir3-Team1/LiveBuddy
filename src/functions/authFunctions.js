import { auth } from '../config/firebase';
import { providers } from '../config/firebase';

export const existingEmailError = ({ code, email, credential }) => {
  if (code === 'auth/account-exists-with-different-credential') {
    auth.fetchSignInMethodsForEmail(email).then(methods => {
      const authProvider = providers.filter(
        provider => provider.providerId === methods[0]
      );
      auth
        .signInWithRedirect(authProvider[0])
        .then(user => user.linkAndRetrieveDataWithCredential(credential))
        .then(result => {
          console.log(result);
        })
        .catch(error => console.log('Error: ', error));
    });
  }
};
