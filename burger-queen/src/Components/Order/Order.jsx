// import { useState } from 'react';
import './Order.css';
import Products from '../Products/Products';

function Order() {
//   const [buttonStyle, setButtonStyle] = useState('typeFood');

  return (
    <section>
      <img className="Back" alt="button to return" src="../img/Back.png" />
      <div className="options">
        <button type="submit">
          Desayunos
        </button>
        <button type="submit">
          Comidas
        </button>
      </div>
      <div className="Products">
        <Products />
      </div>
      <aside className="sectionOrders">
        <h3>Orden Mesa 4</h3>
        <img className="Send" alt="button to send order" src="../img/Send.png" />
        <p className="messageSend">Enviar a cocina</p>
      </aside>
    </section>
  );
}

export default Order;
