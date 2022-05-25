import {
  getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut,
} from 'firebase/auth';

import { app } from './firebaseConfig';

export {
  getAuth, signInWithEmailAndPassword, onAuthStateChanged, app, signOut,
};
