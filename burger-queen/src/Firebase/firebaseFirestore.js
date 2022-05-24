/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import {
  collection, getFirestore, getDocs,
} from 'firebase/firestore';
import { app } from './firebaseApp';

const db = getFirestore(app);
const empleadxs = collection(db, 'Empleadxs');

export const getDocuments = async () => {
  const documents = await getDocs(empleadxs);
  return documents;
};
