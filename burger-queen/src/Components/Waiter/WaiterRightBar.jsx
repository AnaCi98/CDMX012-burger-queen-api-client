/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import './WaiterRightBar.css';
import { changeState } from '../data';

export default function WaiterRightBar({ orders }) {
  const handleClickNotification = (orderId) => {
    changeState(orderId);
    console.log(orderId);
  };
  return (
    <aside className="Nav-right">
      <section className="Notifications">
        <img className="Bell-icon" alt="bell icon" src="../img/BellIcon.png" />
        {orders ? orders.filter((order) => (order.status === 'delivering')).map((order) => (
          <>
            <p className="Notification-client" onClick={() => handleClickNotification(order.id)}>{order.client}</p>
            <p className="Notification-client-date">
              {order.dateProcessed[0]}
              :
              {order.dateProcessed[1]}
              {' '}
            </p>
          </>
        )) : null}
      </section>
      <button className="End-session" id="EndSession" type="button">Fin de Turno</button>
    </aside>
  );
}
