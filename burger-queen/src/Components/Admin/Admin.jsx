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
import { dataProducts, editProduct } from '../data';

function Admin({ getOutSession }) {
  const [workers, setWorkersData] = useState();
  const [modalNewWorker, setNewWorker] = useState(false);
  const [filter, setFilter] = useState('empleadxs');
  const [edit, setEdit] = useState(false);
  const [infoPerUser, setInfoPerUser] = useState();
  const navigate = useNavigate();
  // variables efecto de botones
  const initialValues = {
    Employees: 'True',
    Products: 'False',
  };

  const pressProducts = {
    Employees: 'False',
    Products: 'True',
  };

  const [pressBtn, setPressBtn] = useState(initialValues);
  // funciones para jalar y editar data de empleades
  const dataEmployee = async () => {
    getWorkers().then((res) => setWorkersData(res));
  };

  const deleteEmployee = async (id) => {
    deleteData(id).then(() => dataEmployee());
  };

  const editEmployee = (id, name, rol, turn) => {
    updateEmployee(id, name, rol, turn)
      .then(() => { setNewWorker(false); dataEmployee(); })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    dataEmployee();
  }, []);

  // variable para estado de modal
  const closeModal = () => {
    setNewWorker(false);
  };

  const closeEditModal = () => {
    setEdit(false);
  };

  const editFunction = (worker) => {
    setEdit(true);
    setInfoPerUser(worker);
    setNewWorker(true);
  };

  // funciones para productos
  const [allProducts, setAllProducts] = useState();

  const allDataProducts = async () => {
    const products = await dataProducts('products');
    setAllProducts(products);
  };

  useEffect(() => {
    allDataProducts();
  }, []);

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
            : <Stocktaking allProducts={allProducts} editProduct={editProduct} />
        }
      </section>
    </section>

  );
}

export default Admin;
