/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Order.css';
import Products from '../Products/Products';

function Order() {
//   const [buttonStyle, setButtonStyle] = useState('typeFood');
  const [products, setProducts] = useState();
  const [typeFood, setTypeFood] = useState();
  const navigate = useNavigate();

  const dataProducts = async () => {
    const allProducts = await fetch('http://localhost:3004/products').then((response) => response.json());
    setProducts(allProducts);
  };
  // .filter((food) => food.type === typeFood)
  useEffect(() => {
    dataProducts();
  }, []);

  // const typeFood = () => {
  //   products.forEach((product) => {
  //     if (product.type) {
  //       setProducts(product);
  //     }
  //   });
  // };

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
        <Products products={products} typeFood={typeFood} />
      </div>
      <aside className="sectionOrders">
        <p className="nameTable">Orden Mesa 4</p>
        <img className="Send" alt="button to send order" src="../img/Send.png" />
        <p className="messageSend">Enviar a cocina</p>
      </aside>
    </section>
  );
}

export default Order;
