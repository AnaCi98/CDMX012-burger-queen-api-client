/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWorkers, deleteData, updateEmployee } from '../../Firebase/firebaseFirestore';
import NewWorker from './NewWorker';
import ListEmployees from './ListEmployees';
import Stocktaking from './Stocktaking';
import './Admin.css';

function Admin({ getOutSession }) {
  const [workers, setWorkersData] = useState();
  const [modalNewWorker, setNewWorker] = useState(false);
  const [filter, setFilter] = useState('empleadxs');
  const [edit, setEdit] = useState(false);
  const [infoPerUser, setInfoPerUser] = useState();
  const navigate = useNavigate();

  const initialValues = {
    Employees: 'True',
    Products: 'False',
  };

  const pressProducts = {
    Employees: 'False',
    Products: 'True',
  };

  const [pressBtn, setPressBtn] = useState(initialValues);

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

  const editEmployee = (id, name, rol, turn) => {
    updateEmployee(id, name, rol, turn)
      .then(() => { setNewWorker(false); dataEmployee(); })
      .catch((error) => console.log(error));
  };

  const editFunction = (worker) => {
    setEdit(true);
    setInfoPerUser(worker);
    setNewWorker(true);
  };

  return (
    <section>
      <img
        className="User-info"
        alt="button to return admin view"
        src="../img/User.png"
        onClick={() => getOutSession()}
      />
      <section className="Workers-section">
        <NewWorker
          modalNewWorker={modalNewWorker}
          closeModal={closeModal}
          edit={edit}
          infoPerUser={infoPerUser}
          closeEditModal={closeEditModal}
          editEmployee={editEmployee}
          filter={filter}
        />
        <section className="Workers-filter">
          <button type="button" className={`Workers-button-${pressBtn.Employees}`} onClick={() => { setFilter('empleadxs'); setPressBtn(initialValues); }}>
            Empleades
          </button>
          <button type="button" className={`Workers-button-${pressBtn.Products}`} onClick={() => { setFilter('products'); setPressBtn(pressProducts); }}>
            Productos
          </button>
          <button type="button" className="Workers-button-add" onClick={() => { setNewWorker(true); }}>
            Agregar
          </button>
        </section>
        {
          filter === 'empleadxs'
            ? <ListEmployees editFunction={editFunction} workers={workers} deleteEmployee={deleteEmployee} />
            : <Stocktaking />
        }
      </section>
    </section>

  );
}

export default Admin;
