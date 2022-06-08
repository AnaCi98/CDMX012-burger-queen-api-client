import {
  getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword,
  updateCurrentUser,
} from 'firebase/auth';

import { app } from './firebaseConfig';

export {
  getAuth, signInWithEmailAndPassword, onAuthStateChanged, app,
  signOut, createUserWithEmailAndPassword, updateCurrentUser,
};
