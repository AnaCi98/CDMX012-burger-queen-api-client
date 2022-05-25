/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css';
import Products from './Products';

function Order() {
//   const [buttonStyle, setButtonStyle] = useState('typeFood');
  const navigate = useNavigate();

  return (
    <section className="allMenu">
      <img onClick={() => { navigate('/waiter'); }} className="Back" alt="button to return" src="../img/Back.png" />
      <div className="options">
        <button type="button">
          Desayunos
        </button>
        <button type="button">
          Comidas
        </button>
      </div>
      <div className="Products">
        <Products />
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
