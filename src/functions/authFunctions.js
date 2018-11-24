import { auth } from '../config/firebase';
import { providers } from '../config/firebase';

export const handleExistingEmailError = ({
  email,
  credential: pendingCred
}) => {
  auth.fetchSignInMethodsForEmail(email).then(methods => {
    const authProvider = providers.filter(
      provider => provider.providerId === methods[0]
    );
    auth.signInWithPopup(authProvider[0]).then(({ user }) => {
      user.linkAndRetrieveDataWithCredential(pendingCred);
    });
  });
};
