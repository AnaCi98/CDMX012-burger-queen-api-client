/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  app, getAuth, signInWithEmailAndPassword, signOut,
} from './firebaseApp';

export const auth = getAuth(app);
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const getOutSession = () => signOut(auth);
/* .then((userCredential) => {
    const { user } = userCredential;
    console.log(user);
    return user;
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      return errorMessage;
    }); */
