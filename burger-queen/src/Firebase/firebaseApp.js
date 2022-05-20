import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import { app } from './firebaseConfig';

export {
  getAuth, signInWithEmailAndPassword, onAuthStateChanged, app,
};
