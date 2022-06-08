/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  app, getAuth, signInWithEmailAndPassword, signOut,
  createUserWithEmailAndPassword, updateCurrentUser,
} from './firebaseApp';

export const auth = getAuth(app);
export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
// export const getOutSession = () => signOut(auth);
// export const createUser = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password);
// };

export { updateCurrentUser, createUserWithEmailAndPassword, signOut };

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
