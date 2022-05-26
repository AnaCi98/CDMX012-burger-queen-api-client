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
  const [products, setProducts] = useState();
  const [typeFood, setTypeFood] = useState('meal');
  const navigate = useNavigate();

  const dataProduct = async () => {
    const allProducts = await dataProducts('products');
    setProducts(allProducts);
  };
  const addList = (product) => {
    setListOrder([...listOrder, product]);
    console.log(listOrder);
  };

  useEffect(() => {
    dataProduct();
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
        <Products products={products} typeFood={typeFood} addList={addList} />
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
