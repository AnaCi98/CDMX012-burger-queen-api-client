import { useEffect, useState } from 'react';
import { getWorkers } from '../../Firebase/firebaseFirestore';
import NewWorker from './NewWorker';
import './Workers.css';

function Workers() {
  const [workers, getWorkersData] = useState();
  const [modalNewWorker, setNewWorker] = useState(false);
  const [role, setRole] = useState('meserx');

  useEffect(() => {
    getWorkersData(getWorkers());
  }, []);

  const closeModal = () => {
    setNewWorker(false);
  };

  return (
    <section className="Workers-section">
      <NewWorker modalNewWorker={modalNewWorker} closeModal={closeModal} />
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
      <table className="Workers-table">
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Correo electronico</th>
            <th>Rol</th>
            <th>Turno</th>
          </tr>
          <tr>
            { workers ? workers.filter((worker) => worker.rol === role).map((worker) => (
              <>
                <td>
                  {' '}
                  {worker.nombre}
                  {' '}
                </td>
                <td> lupe_ci98 @hotmail.com </td>
                <td>
                  {' '}
                  {worker.rol}
                  {' '}
                </td>
                <td> matutino </td>
                <td>
                  <img className="Edit-workers" alt="button to edit" src="../img/Edit.png" />
                  <img className="Delete-workers" alt="button to delete" src="../img/Delete.png" />
                </td>
              </>
            )) : null}

          </tr>
        </tbody>
      </table>
    </section>

  );
}

export default Workers;
