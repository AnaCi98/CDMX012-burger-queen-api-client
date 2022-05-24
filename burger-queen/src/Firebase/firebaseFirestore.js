/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import {
  collection, getFirestore, getDocs,
} from 'firebase/firestore';
import { app } from './firebaseApp';

const db = getFirestore(app);
const empleadxs = collection(db, 'Empleadxs');
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-mutable-exports

export const getRole = (activeUser) => {
  console.log(activeUser, 'active user en firestore');
  const profile = [];
  getDocs(empleadxs).then((docs) => {
    docs.forEach((doc) => {
      if (doc.id === activeUser) {
        profile.push(doc.data());
        console.log(profile, 'getRole');
      }
    });
    return profile;
  });
};
// eslint-disable-next-line import/no-mutable-exports
// const active = query((empleadxs), where('id', '==', activeUser));
/* const getEmployees = (activeUser) => {
  const active = query((empleadxs), where(empleadxs, '===', activeUser));
  console.log(active, 'firestoreeeee');
  getDocs(active).then((docs) => {
    const documentFound = docs.find((doc) => active === doc.id);
    console.log(documentFound, 'in getEmployees');
  });
};
 */
