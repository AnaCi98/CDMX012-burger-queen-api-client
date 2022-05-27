/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Order.css';
import Products from '../Products/Products';
import dataProducts from '../data';

function Order({ newClient, activeName }) {
  // const [buttonStyle, setButtonStyle] = useState('typeFood');
  // const [pressButtonStyle, setPressButtonStyle] = useState('typeFood');
  const [listOrder, setListOrder] = useState([]);
  // const [lastOrder, setLastOrder] = useState();
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
    const productOrder = {
      qty: 0,
      product: product.name,
      price: product.price,
    };
    setListOrder([...listOrder, productOrder]);
    console.log(listOrder);
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
        products: listOrder,
        status: 'pending',
        dateEntry: [hour, minutes, seconds],
        dateProcessed: '00:00',
      }),
    };
    fetch('http://localhost:3004/order', putMethod).then((response) => response.json().products).then((product) => console.log(product));
  };

  useEffect(() => {
    dataProduct();
    // theLastOrder();
  }, []);

  // useEffect(() => {
  //   addOrder();
  // }, [listOrder]);

  return (
    <section className="allMenu">
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
        {' '}
        <img onClick={() => { addOrder(); }} className="Send" alt="button to send order" src="../img/Send.png" />
        <p className="messageSend">Enviar a cocina</p>
      </section>
    </section>
  );
}

export default Order;
