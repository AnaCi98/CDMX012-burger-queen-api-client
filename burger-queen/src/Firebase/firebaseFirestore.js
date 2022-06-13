/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import {
  collection, getFirestore, getDocs, doc, setDoc, deleteDoc, updateDoc,
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

export const getWorkers = async () => {
  const arrayWorkers = [];
  const q = collection(db, 'Empleadxs');
  const data = await getDocs(q);
  data.forEach((docu) => arrayWorkers.push({ ...docu.data(), id: docu.id }));
  return arrayWorkers;
};

getWorkers();

export const submitWorker = (name, role, email, turn, id) => setDoc(doc(db, 'Empleadxs', id), {
  nombre: name,
  rol: role,
  correo: email,
  turno: turn,
});
export { setDoc, doc };

export const deleteData = (id) => deleteDoc(doc(db, 'Empleadxs', id));

export const updateEmployee = async (id, name, role, turn) => updateDoc(doc(db, 'Empleadxs', id), { nombre: name, rol: role, turno: turn });
