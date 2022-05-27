/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Order.css';
import Products from '../Products/Products';
import dataProducts from '../data';

function Order() {
  // const [buttonStyle, setButtonStyle] = useState('typeFood');
  // const [pressButtonStyle, setPressButtonStyle] = useState('typeFood');
  const [listOrder, setListOrder] = useState([]);
  const [client, setClient] = useState();
  const [lastOrder, setLastOrder] = useState();
  const [products, setProducts] = useState();
  const [typeFood, setTypeFood] = useState('meal');
  const navigate = useNavigate();

  const dataProduct = async () => {
    const allProducts = await dataProducts('products');
    setProducts(allProducts);
  };
  const theLastOrder = async () => {
    const allOrder = await dataProducts('order');
    setLastOrder(allOrder[allOrder.length - 1]);
    // setLastOrder(allOrder);
    console.log(lastOrder);
  };
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
    const putMethod = {
      method: 'PATCH', // Method itself
      headers: {
        'Content-type': 'application/json; charset=UTF-8', // Indicates the content
      },
      body: JSON.stringify({
        // id: lastOrder.id,
        // client: 'NUEVOCLIENTE',
        // userId: 'idWaiter',
        products: listOrder,
        // status: 'status',
        // dateEntry: '00/00/00',
        // dateProcessed: '00:00',
      }),
    };
    fetch(`http://localhost:3004/order/${lastOrder.id}`, putMethod).then((response) => response.json().products).then((product) => console.log(product));
  };

  useEffect(() => {
    dataProduct();
    theLastOrder();
  }, []);

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
        <Products products={products} typeFood={typeFood} addList={addList} addOrder={addOrder} />
      </div>
      <section className="sectionOrders">
        <p className="nameTable">Orden Mesa 4</p>
        <img className="Send" alt="button to send order" src="../img/Send.png" />
        <p className="messageSend">Enviar a cocina</p>
      </section>
    </section>
  );
}

export default Order;
