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
import ModalConfirmation from '../ModalConfirmation';
import NewProduct from './NewProduct';

function Admin({ getOutSession }) {
  // variable de estado que contiene la informacion de TODOS los empleades,
  // a diferencia de infoPerUser, que solo contiene la informacion de UN empleade
  const [confirmation, setConfirmation] = useState(false);
  const [workers, setWorkersData] = useState();
  const [modalNewWorker, setNewWorker] = useState(false);
  const [modalNewProduct, setNewProduct] = useState(false);
  const [idWorker, setId] = useState();
  // variable de estado para filtrar listas, ya sea empleades o productos
  const [filter, setFilter] = useState('empleadxs');
  const [edit, setEdit] = useState(false);
  // infoPerUser es la variable de estado que
  // contiene la informacion de cada uno de los empleades (revisar linea 72 de Admin)
  const [infoPerUser, setInfoPerUser] = useState();
  const [infoPerProduct, setInfoPerProduct] = useState();
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
  // funcion para eliminar empleade
  const deleteEmployee = async (id) => {
    deleteData(id).then(() => dataEmployee());
  };
  // abrir modal de confirmacion
  const openConfirmation = (idEmployee) => {
    setConfirmation(true);
    setId(idEmployee);
  };
  // cerrar modal de confirmacion
  const closeConfirmation = () => {
    setConfirmation(false);
  };

  // funcion para editar empleade
  const editEmployee = (id, name, rol, turn) => {
    updateEmployee(id, name, rol, turn)
      .then(() => { setNewWorker(false); dataEmployee(); })
      .catch((error) => console.log(error));
  };
  const editProductAdmin = (id, infoProduct) => {
    editProduct(id, infoProduct);
    setNewProduct(false);
  };

  useEffect(() => {
    dataEmployee();
  }, []);

  // funcion para cerrar modal (modalNewWorker)
  const closeModal = () => {
    setNewWorker(false);
    setNewProduct(false);
  };

  // funcion para cambiar de estado la variable edit a false,
  // edit se utiliza en NewWorker para condicionar el renderizado de
  // distintos inputs (observar comentarios en las lineas 65 y 109 de NewWorker.jsx)
  const closeEditModal = () => {
    setEdit(false);
  };

  // funcion para abrir modal, cambiar el estado de la variable edit a true,
  // y setear la informacion de empleades en la variable de estado InfoPerUser
  // worker es la informacion de un empleade que aparece en la lista (linea 32 de ListEmployees)
  const editFunction = (worker) => {
    setEdit(true);
    // esta variable de estado se setea con la informacion que contiene del empleade
    // revisar la consola de la linea 32 de ListEmployees.jsx
    setInfoPerUser(worker);
    setNewWorker(true);
  };
  const editProductFunction = (product) => {
    setEdit(true);
    setInfoPerProduct(product);
    setNewProduct(true);
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
        <ModalConfirmation closeConfirmation={closeConfirmation} confirmation={confirmation} id={idWorker} deleteEmployee={deleteEmployee} />
        <NewWorker
          modalNewWorker={modalNewWorker}
          closeModal={closeModal}
          edit={edit}
          infoPerUser={infoPerUser}
          closeEditModal={closeEditModal}
          editEmployee={editEmployee}
          filter={filter}
        />
        <NewProduct
          modalNewProduct={modalNewProduct}
          closeModal={closeModal}
          edit={edit}
          infoPerProduct={infoPerProduct}
          closeEditModal={closeEditModal}
          editProductAdmin={editProductAdmin}
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
            ? <ListEmployees editFunction={editFunction} workers={workers} deleteEmployee={deleteEmployee} openConfirmation={openConfirmation} />
            : <Stocktaking editProductFunction={editProductFunction} allProducts={allProducts} editProduct={editProduct} />
        }
      </section>
    </section>

  );
}

export default Admin;
