/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWorkers, deleteData } from '../../Firebase/firebaseFirestore';
import NewWorker from './NewWorker';
import './Workers.css';

function Workers() {
  const [workers, setWorkersData] = useState();
  const [modalNewWorker, setNewWorker] = useState(false);
  const [role, setRole] = useState('meserx');
  const [edit, setEdit] = useState(false);
  const [infoPerUser, setInfoPerUser] = useState();
  const navigate = useNavigate();
  const dataEmployee = async () => {
    getWorkers().then((res) => setWorkersData(res));
  };

  useEffect(() => {
    dataEmployee();
  }, []);

  const closeModal = () => {
    setNewWorker(false);
  };

  const closeEditModal = () => {
    setEdit(false);
  };

  const deleteEmployee = async (id) => {
    deleteData(id).then(() => dataEmployee());
  };

  return (
    <section>
      <img
        className="Back-admin-view"
        alt="button to return admin view"
        src="../img/Back.png"
        onClick={() => { navigate('/'); }}
      />
      <section className="Workers-section">
        <NewWorker modalNewWorker={modalNewWorker} closeModal={closeModal} edit={edit} infoPerUser={infoPerUser} closeEditModal={closeEditModal} />
        <section className="Workers-filter">
          <button type="button" className="Workers-button-filter" onClick={() => { setRole('meserx'); }}>
            Meserxs
          </button>
          <button type="button" className="Workers-button-filter" onClick={() => { setRole('cocina'); }}>
            Cocina
          </button>
          <button type="button" className="Workers-button-add" onClick={() => { setNewWorker(true); }}>
            Agregar
          </button>
        </section>
        <section className="Table-section-workers">
          <table className="Workers-table">
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Correo electronico</th>
                <th>Rol</th>
                <th>Turno</th>
              </tr>
              { workers?.map((worker) => (
                <tr key={workers.id}>
                  <td>
                    {worker.nombre}
                  </td>
                  <td>
                    {worker.correo}
                  </td>
                  <td>
                    {worker.rol}
                  </td>
                  <td> matutino </td>
                  <td>
                    <img className="Edit-workers" alt="button to edit" src="../img/Edit.png" onClick={() => { setEdit(true); setInfoPerUser(worker); setNewWorker(true); }} />
                    <img className="Delete-workers" alt="button to delete" src="../img/Delete.png" onClick={() => deleteEmployee(worker.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </section>

  );
}

export default Workers;
