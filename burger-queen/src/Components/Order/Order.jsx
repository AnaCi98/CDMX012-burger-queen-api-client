/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Order.css';
import Products from '../Products/Products';
import { addNewOrder, dataProducts } from '../data';
import { listProducts, deleteOne, addOne } from '../Helpers';
import OrderSummary from './OrderSummary';

function Order({ newClient, activeName }) {
  // const [buttonStyle, setButtonStyle] = useState('typeFood');
  // const [pressButtonStyle, setPressButtonStyle] = useState('typeFood');
  // const [total, setTotal] = useState();
  const view = useState(true);
  const [summary, setSummary] = useState(false);
  const [structureList, setStructure] = useState();
  const [listOrder, setListOrder] = useState([]);
  const [products, setProducts] = useState();
  const [typeFood, setTypeFood] = useState('breakfast');
  const navigate = useNavigate();

  const initialValues = {
    Meal: 'True',
    Breakfast: 'False',
  };

  const pressBreakfast = {
    Meal: 'False',
    Breakfast: 'True',
  };

  const [pressBtn, setPressBtn] = useState(initialValues);

  // Obtener productos de la data
  const dataProduct = async () => {
    const allProducts = await dataProducts('products');
    setProducts(allProducts);
  };

  // Para añadir productos
  const addList = (product) => {
    setListOrder([...listOrder, product]);
  };

  // Eliminar un producto
  const deleteProduct = (food) => {
    setListOrder([...deleteOne(food, listOrder)]);
  };

  // Agregar un producto
  const addProduct = (food) => {
    setListOrder([...addOne(food, listOrder)]);
  };

  // Cerrar resumen de la orden
  const closeSummary = () => {
    setSummary(false);
  };

  useEffect(() => {
    dataProduct();
  }, []);

  useEffect(() => {
    setStructure(listProducts(listOrder));
  }, [listOrder]);

  const addOrder = () => {
    addNewOrder(newClient, activeName, structureList).then((order) => order);
  };

  return (
    <section className="allMenu">
      <OrderSummary
        structureList={structureList}
        addOrder={addOrder}
        summary={summary}
        closeSummary={closeSummary}
        view={view}
        confirmation="Enviar"
      />
      <img onClick={() => { navigate('/'); }} className="Back" alt="button to return" src="../img/Back.png" />
      <div className="options">
        <button className={`press${pressBtn.Meal}`} onClick={() => { setTypeFood('breakfast'); setPressBtn(initialValues); }} type="button">
          Desayunos
        </button>
        <button className={`press${pressBtn.Breakfast}`} onClick={() => { setTypeFood('meal'); setPressBtn(pressBreakfast); }} type="button">
          Comidas
        </button>
      </div>
      <div className="Products">
        <Products products={products} typeFood={typeFood} addList={addList} />
      </div>
      <section className="sectionOrders">
        <p className="nameTable">
          Orden
          {newClient}
        </p>
        <div className="listProducts">
          { structureList ? structureList.map((product) => (
            <div className="infoProducts" key={product.id}>
              <p>{product.product}</p>
              <button onClick={() => { deleteProduct(product); }} type="submit">-</button>
              <p>{product.qty}</p>
              <button onClick={() => { addProduct(product); }} type="submit">+</button>
            </div>
          )) : null }
        </div>
        <img onClick={() => { setSummary(true); }} className="Send" alt="button to send order" src="../img/Send.png" />
        <p className="messageSend">Enviar a cocina</p>
      </section>
    </section>
  );
}

export default Order;
