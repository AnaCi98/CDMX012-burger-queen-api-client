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
  // valores iniciales del formulario
  const initialValues = {
    nombre: '',
    rol: 'Rol',
    correo: '',
    password: '',
    turno: 'Turno',
  };
  // infoWorker se inicializa con valores iniciales del formulario
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
    // Se setea setInfoWorker con infoPerUser si edit es true
    // si le damos click al boton de editar se setea esta informacion
    // unicamente ocurre cuando cambia infoPerUser
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
          // Al dar click a esta flecha se cierra el modal con closeModal()
          // se resetea la informacion del formulario, en caso de que abramos el modal
          // para crear nuevo empleade con serInfoWorker(initialValues)
          // y se cambia la variable de estado de edit a false con closeEditModal()
          onClick={() => { closeModal(); setInfoWorker(initialValues); closeEditModal(); }}
        />
        <div className="new-worker-form">
          { filter === 'products' ? (<p>Agregar producto</p>) : (<p>Agregar empleade</p>)}
          <input className="admin-form-input" type="text" placeholder="Nombre" defaultValue={infoWorker.nombre} name="nombre" onChange={changeInfo} />
          {/* Aqui se utiliza edit para restringir el renderizado de estos
              inputs, ya que al editar ya no se va a ver el input de correo y contraseña
           */}
          {edit || filter === 'products' ? null : (
            <>
              <input className="admin-form-input" type="text" placeholder="Correo electronico" defaultValue={infoWorker.correo} name="correo" onChange={changeInfo} />
              <input className="admin-form-input" type="password" placeholder="Contraseña" name="password" onChange={changeInfo} />
            </>
          )}
          { filter === 'products' ? null : (
            <>
              {/* Aqui recibe un valor por default para que al abrir el modal
                  cuando de quiere editar la informacion, pueda renderizarla en el formulario
                  como infoWorker inicialmente esta vacio, cuando hagamos click en agregar un nuevo
                  empleade infoWorker va a tener valores iniciales vacios, pero cuando le
                  demos click a editar empleade infoWorker se va a setear con la informacion de ese
                  empleade (explicacion en linea 76 de Admin.jsx)
              */}
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
          {/* Aqui utilizamos edit para condicionar el renderizado del botton Actualizar
              si edit es true, entonces se muestra el boton de actualizar pero si no lo es
              muestra el boton de crear
              Inclusive podriamos optimizar el codigo, creando un solo condicionado para renderizar
              si edit ? ( button actalizar ) : (button crear)
              Y dentro de la funcion de onClick tambien podemos condicionar que funcion utilice
              dependiendo del filtro, si estamos en la lista de empleades que aplique la funcion
              de editar empleades sino que aplique la funcion de editar productos
           */}
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
