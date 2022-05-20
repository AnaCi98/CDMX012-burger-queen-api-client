/* eslint-disable no-console */
import {
  collection, getFirestore, getDocs,
} from 'firebase/firestore';
import { app } from './firebaseApp';

const db = getFirestore(app);
const empleadxs = collection(db, 'Empleadxs');
const idEmpleadxs = [];
getDocs(empleadxs).then((docsEmpleadxs) => {
  docsEmpleadxs.docs.forEach((doc) => {
    idEmpleadxs.push(
      {
        id: doc.id,
        rol: doc.data().rol,
      },
    );
  });
});
console.log(idEmpleadxs);
export default idEmpleadxs;
