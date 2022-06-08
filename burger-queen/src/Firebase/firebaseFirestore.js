/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import {
  collection, getFirestore, getDocs, onSnapshot, query, doc, setDoc,
} from 'firebase/firestore';
import { app } from './firebaseApp';

export const db = getFirestore(app);
const empleadxs = collection(db, 'Empleadxs');

export const getRole = async (activeUser) => {
  let document = '';
  await getDocs(empleadxs).then((docs) => {
    docs.forEach((docc) => {
      if (docc.id === activeUser) {
        // const newRole = (doc.data().rol).toString();
        // console.log(newRole);
        document = {
          ...docc,
          rol: docc.data().rol,
          name: docc.data().nombre,
        };
      }
    });
  });
  return document;
};

export const getWorkers = () => {
  const arrayWorkers = [];
  const q = query(collection(db, 'Empleadxs'));
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((docs) => {
      console.log(docs.data());
      arrayWorkers.push({ ...docs.data(), id: docs.id });
    });
  });
  return arrayWorkers;
};

export const submitWorker = async () => {
  await setDoc(doc(db, 'Empleadxs', 'userId'), {
    nombre: 'holi',
    rol: 'jo',
    correo: 'email',
    turno: 'turnos',
  });
};
export { setDoc, doc };
