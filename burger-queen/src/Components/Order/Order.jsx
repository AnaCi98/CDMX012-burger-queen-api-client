/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Order.css';
import Products from '../Products/Products';
import { dataProducts } from '../data';
import listProducts from '../Helpers';
import OrderSummary from './OrderSummary';

function Order({ newClient, activeName }) {
  // const [buttonStyle, setButtonStyle] = useState('typeFood');
  // const [pressButtonStyle, setPressButtonStyle] = useState('typeFood');
  // const [total, setTotal] = useState();
  const [summary, setSummary] = useState(false);
  const [structureList, setStructure] = useState();
  const [listOrder, setListOrder] = useState([]);
  const [products, setProducts] = useState();
  const [typeFood, setTypeFood] = useState('meal');
  const navigate = useNavigate();

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
    let index;
    const newArray = listOrder;
    newArray.forEach((element) => {
      if (element.name === food.product) {
        index = newArray.indexOf(element);
      }
    });
    newArray.splice(index, 1);
    setListOrder([...newArray]);
  };

  // Agregar un producto
  const addProduct = (food) => {
    const newArray = listOrder;
    newArray.forEach((element) => {
      if (element.name === food.product) {
        setListOrder([...newArray, element]);
      }
    });
  };

  const addOrder = () => {
    const date = new Date();
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    const putMethod = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        client: newClient,
        userId: activeName,
        products: structureList,
        status: 'pending',
        dateEntry: [hour, minutes, seconds],
        dateProcessed: '00:00',
      }),
    };
    fetch('http://localhost:3004/order', putMethod).then((response) => response.json().products).then((product) => console.log(product));
  };

  // Cerrar resumen de la orden
  const closeSummary = () => {
    setSummary(false);
  };
  // Suma del total de productos
  // const amount = () => {
  //   const amountTotal = 0;
  //   structureList.
  // }
  useEffect(() => {
    dataProduct();
  }, []);

  useEffect(() => {
    setStructure(listProducts(listOrder));
  }, [listOrder]);

  return (
    <section className="allMenu">
      <OrderSummary
        structureList={structureList}
        addOrder={addOrder}
        summary={summary}
        closeSummary={closeSummary}
        // total={total}
      />
      <img onClick={() => { navigate('/waiter'); }} className="Back" alt="button to return" src="../img/Back.png" />
      <div className="options">
        <button onClick={() => { setTypeFood('breakfast'); console.log(typeFood); }} type="button">
          Desayunos
        </button>
        <button onClick={() => { setTypeFood('meal'); console.log(typeFood); }} type="button">
          Comidas
        </button>
      </div>
      <div className="Products">
        <Products products={products} typeFood={typeFood} addList={addList} />
      </div>
      <section className="sectionOrders">
        <p className="nameTable">
          Orden
          {' '}
          {newClient}
        </p>
        <div className="listProducts">
          { structureList ? structureList.map((product) => (
            <div className="infoProducts">
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
