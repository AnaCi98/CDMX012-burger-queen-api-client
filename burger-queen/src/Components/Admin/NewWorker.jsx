/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateCurrentUser, auth } from '../../Firebase/firebaseAuth';
import { submitWorker } from '../../Firebase/firebaseFirestore';
import './NewWorker.css';

export default function NewWorker({ modalNewWorker, closeModal }) {
  const [infoWorker, setInfoWorker] = useState({});
  // const [workerId, setUserId] = useState();
  const userActual = auth.currentUser;
  console.log(userActual);
  const changeInfo = (e) => {
    e.persist();
    const { name } = e.target;
    const val = e.target.value;
    setInfoWorker({ ...infoWorker, [name]: val });
  };

  const newAccount = async () => {
    await createUserWithEmailAndPassword(
      auth,
      infoWorker.email,
      infoWorker.password,
    ).then((userCredential) => {
      submitWorker();
      updateCurrentUser(auth, userActual);
    });
  };

  if (modalNewWorker) {
    return (
      <section className="new-worker-section">
        <form className="new-worker-form">
          <p className="close-new-worker" onClick={() => { closeModal(); setInfoWorker({}); }}>Cerrar</p>
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
