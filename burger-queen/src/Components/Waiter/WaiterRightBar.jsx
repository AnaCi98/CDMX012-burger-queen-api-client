/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react/cjs/react.production.min';
import './WaiterRightBar.css';
import { changeState } from '../data';

export default function WaiterRightBar({ orders, dataOrders }) {
  const handleClickNotification = (orderId) => {
<<<<<<< HEAD
    changeState(orderId);
=======
    changeState(orderId).then((products) => { dataOrders(); console.log(products); });
    console.log(orderId);
>>>>>>> 20d19eb8ec1e1b78232a2d547b90fb4648da9b96
  };

  return (
    <aside className="Nav-right">
      <section className="Notifications">
        <img className="Bell-icon" alt="bell icon" src="../img/BellIcon.png" />
        {orders ? orders.filter((order) => (order.status === 'delivering')).map((order) => (
          <object key={order.id}>
            <p className="Notification-client" onClick={() => handleClickNotification(order.id)}>{order.client}</p>
            <p className="Notification-client-date">
              {order.dateProcessed[0]}
              :
              {order.dateProcessed[1]}
              {' '}
            </p>
          </object>
        )) : null}
      </section>
      <button className="End-session" id="EndSession" type="button">Fin de Turno</button>
    </aside>
  );
}
