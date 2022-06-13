/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { createUser, currentUserActual, auth } from '../../Firebase/firebaseAuth';
import { submitWorker } from '../../Firebase/firebaseFirestore';
import './NewWorker.css';

export default function NewWorker({
  modalNewWorker,
  closeModal, edit, infoPerUser, closeEditModal, editEmployee, filter,
}) {
  const initialValues = {
    nombre: '',
    rol: 'Rol',
    correo: '',
    password: '',
    turno: 'Turno',
  };

  const [infoWorker, setInfoWorker] = useState(initialValues);
  const userActual = auth.currentUser;
  const changeInfo = (e) => {
    e.persist();
    const { name } = e.target;
    const val = e.target.value;
    setInfoWorker({ ...infoWorker, [name]: val });
  };

  const newAccount = async (e) => {
    e.preventDefault();
    createUser(
      infoWorker.correo,
      infoWorker.password,
    ).then((userCredential) => {
      submitWorker(
        infoWorker.nombre,
        infoWorker.rol,
        infoWorker.correo,
        infoWorker.turno,
        userCredential.user.uid,
      ).then(() => currentUserActual(userActual));
    });
  };

  useEffect(() => {
    if (edit) {
      setInfoWorker(infoPerUser);
    }
  }, [infoPerUser]);

  if (modalNewWorker) {
    return (
      <section className="new-worker-section">
        <img
          className="Back-worker-view"
          alt="button to return admin view"
          src="../img/Back.png"
          onClick={() => { closeModal(); setInfoWorker(initialValues); closeEditModal(); }}
        />
        <div className="new-worker-form">
          { filter === 'products' ? (<p>Agregar producto</p>) : (<p>Agregar empleade</p>)}
          <input className="admin-form-input" type="text" placeholder="Nombre" defaultValue={infoWorker.nombre} name="nombre" onChange={changeInfo} />
          {edit || filter === 'products' ? null : (
            <>
              <input className="admin-form-input" type="text" placeholder="Correo electronico" defaultValue={infoWorker.correo} name="correo" onChange={changeInfo} />
              <input className="admin-form-input" type="password" placeholder="Contraseña" name="password" onChange={changeInfo} />
            </>
          )}
          { filter === 'products' ? null : (
            <>
              <select defaultValue="DEFAULT" name="rol" onChange={changeInfo}>
                <option value="DEFAULT" hidden>{infoWorker.rol}</option>
                <option value="meserx">Meserx</option>
                <option value="cocina">Cocina</option>
              </select>
              <select defaultValue="DEFAULT" name="turno" onChange={changeInfo}>
                <option value="DEFAULT" hidden>{infoWorker.turno}</option>
                <option value="matutino">Matutino</option>
                <option value="vespertino">Vespertino</option>
              </select>
            </>
          )}
          {filter === 'products' ? (
            <>
              <input placeholder="Precio" />
              <select defaultValue="DEFAULT" name="Tipo">
                <option value="DEFAULT" hidden>Tipo</option>
                <option value="meal">Desayuno</option>
                <option value="breakfast">Comida</option>
              </select>
            </>
          ) : null }
          {edit ? null : (
            <button
              type="button"
              className="Add-worker"
              onClick={(e) => {
                newAccount(e);
              }}
            >
              Crear
            </button>
          ) }
          {edit ? (
            <button
              type="button"
              className="Add-worker"
              onClick={() => {
                editEmployee(
                  infoWorker.id,
                  infoWorker.nombre,
                  infoWorker.rol,
                  infoWorker.turno,
                );
              }}
            >
              Actualizar
            </button>
          ) : null}
        </div>
      </section>
    );
  } return null;
}
