/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateCurrentUser, auth } from '../../Firebase/firebaseAuth';
import { setDoc, doc, db } from '../../Firebase/firebaseFirestore';
import './NewWorker.css';

export default function NewWorker({ modalNewWorker, closeModal }) {
  const [infoWorker, setInfoWorker] = useState({});
  const userActual = auth.currentUser;
  console.log(userActual);
  const changeInfo = (e) => {
    e.persist();
    const { name } = e.target;
    const val = e.target.value;
    setInfoWorker({ ...infoWorker, [name]: val });
  };

  const newAccount = async () => {
    const infoUser = await createUserWithEmailAndPassword(
      auth,
      infoWorker.email,
      infoWorker.password,
    ).then((userCredential) => {
      // submitWorker();
      setDoc(doc(db, 'Empleadxs', userCredential.user.uid), {
        nombre: infoWorker.name,
        rol: infoWorker.rol,
        correo: infoWorker.email,
        turno: infoWorker.turno,
      }).then(() => {
        updateCurrentUser(auth, userActual);
      });
      return userCredential;
    });
    return infoUser;
  };

  if (modalNewWorker) {
    return (
      <section className="New-worker-section">
        <div>
          <p onClick={() => { closeModal(); setInfoWorker({}); }}>Cerrar</p>
          <input type="text" placeholder="Nombre" name="name" onChange={changeInfo} />
          <input type="text" placeholder="Correo electronico" name="email" onChange={changeInfo} />
          <input type="password" placeholder="Contraseña" name="password" onChange={changeInfo} />
          <select name="rol" onChange={changeInfo}>
            <option selected hidden>Rol</option>
            <option value="meserx">Meserx</option>
            <option value="cocina">Cocina</option>
          </select>
          <select name="turno" onChange={changeInfo}>
            <option selected hidden>Turno</option>
            <option value="meserx">Matutino</option>
            <option value="cocina">Vespertino</option>
          </select>
          <button
            type="button"
            className="Add-worker"
            onClick={() => {
              newAccount();
            }}
          >
            Crear
          </button>
        </div>
      </section>
    );
  } return null;
}
