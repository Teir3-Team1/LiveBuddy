import { auth } from '../config/firebase';
import { providers } from '../config/firebase';

export const existingEmailError = ({
  code,
  email,
  credential: pendingCred
}) => {
  if (code === 'auth/account-exists-with-different-credential') {
    auth.fetchSignInMethodsForEmail(email).then(methods => {
      const authProvider = providers.filter(
        provider => provider.providerId === methods[0]
      );
      auth
        .signInWithPopup(authProvider[0])
        .then(({ user }) => {
          user.linkAndRetrieveDataWithCredential(pendingCred);
        })
        .catch(error => {
          console.log('Error: ', error.code);
        });
    });
  }
};
