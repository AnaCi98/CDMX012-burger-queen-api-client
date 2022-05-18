/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { app, getAuth, signInWithEmailAndPassword } from './firebaseApp';

export const auth = getAuth(app);
export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const { user } = userCredential;
    console.log(user);
    return user;
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
};
