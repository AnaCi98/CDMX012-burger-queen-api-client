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
    ).then((userCredential) => userCredential);
    await updateCurrentUser(auth, userActual);
    setDoc(doc(db, 'Empleadxs', infoUser.user.uid), {
      nombre: infoWorker.name,
      rol: infoWorker.rol,
      correo: infoWorker.email,
      turno: infoWorker.turno,
    });
  };

  if (modalNewWorker) {
    return (
      <section className="new-worker-section">
        <img
          className="Back-worker-view"
          alt="button to return admin view"
          src="../img/Back.png"
          onClick={() => { closeModal(); setInfoWorker({}); }}
        />
        <form className="new-worker-form">

          <input className="admin-form-input" type="text" placeholder="Nombre" name="name" onChange={changeInfo} />
          <input className="admin-form-input" type="text" placeholder="Correo electronico" name="email" onChange={changeInfo} />
          <input className="admin-form-input" type="password" placeholder="Contraseña" name="password" onChange={changeInfo} />
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
        </form>
      </section>
    );
  } return null;
}
