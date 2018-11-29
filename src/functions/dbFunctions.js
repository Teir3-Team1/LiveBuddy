import { database } from '../config/firebase';

export const addUser = user => {
  const uid = user.uid;
  const { displayName, email, photoURL } = user.providerData[0];
  const userInfo = { displayName, email, photoURL };

  return database
    .ref('users')
    .child(uid)
    .set(userInfo);
};
