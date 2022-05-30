// import { useNavigate } from 'react-router-dom';
import './Waiter.css';
import { useState, useEffect } from 'react';
import ModalNewClient from '../ModalNewClient/ModalNewClient';
import dataProducts from '../data';
import ClientsButtons from '../ClientsButtons/ClientsButtons';

// eslint-disable-next-line react/prop-types
function Waiter({ activeName, getClientName }) {
  // const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [orders, setOrders] = useState();
  const closeModal = () => setModal(false);

  const dataOrders = async () => {
    const allOrders = await dataProducts('order');
    setOrders(allOrders);
  };

  useEffect(() => {
    dataOrders();
  }, []);

  return (
    <div className="Waiter">
      <ModalNewClient
        modal={modal}
        closeModal={closeModal}
        activeName={activeName}
        getClientName={getClientName}
      />
      <section className="Waiter-main">
        <p className="Waiter-welcome">
          Bienvenidx a tu turno,
          {' '}
          {activeName}
        </p>
        <object className="Clients-section">
          <section className="Clients-title">
            Órdenes
            <button onClick={() => { setModal(true); }} className="Clients-add" id="CientsAdd" type="button">+</button>
          </section>
          <section className="Clients-orders-section">
            <ClientsButtons orders={orders} />
          </section>
        </object>
      </section>
      <aside className="Nav-right">
        <section className="Notifications">
          <img className="Bell-icon" alt="bell icon" src="../img/BellIcon.png" />
          <p className="Notifications-Text" />
        </section>
        <button className="End-session" id="EndSession" type="button">Fin de Turno</button>
      </aside>
    </div>
  );
}

export default Waiter;
