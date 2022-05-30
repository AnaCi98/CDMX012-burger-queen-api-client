/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import {
  collection, getFirestore, getDocs,
} from 'firebase/firestore';
import { app } from './firebaseApp';

const db = getFirestore(app);
const empleadxs = collection(db, 'Empleadxs');

export const getRole = async (activeUser) => {
  let document = '';
  await getDocs(empleadxs).then((docs) => {
    docs.forEach((doc) => {
      if (doc.id === activeUser) {
        // const newRole = (doc.data().rol).toString();
        // console.log(newRole);
        document = {
          ...doc,
          rol: doc.data().rol,
          name: doc.data().nombre,
        };
      }
    });
  });
  return document;
};
