// import { useNavigate } from 'react-router-dom';
import './Waiter.css';
import { useState } from 'react';
import ModalNewClient from '../ModalNewClient/ModalNewClient';

// eslint-disable-next-line react/prop-types
function Waiter({ activeName, getClientName }) {
  // const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);

  return (
    <div className="Waiter">
      <ModalNewClient
        modal={modal}
        closeModal={closeModal}
        activeName={activeName}
        getClientName={getClientName}
      />
      <object className="Clients-section">
        <section className="Clients-title">
          Órdenes
          <button onClick={() => { setModal(true); }} className="Clients-add" id="CientsAdd" type="button">+</button>
        </section>
        <section className="Clients-orders-section">
          Bienvenidx a tu turno,
          {' '}
          {activeName}
        </section>
      </object>
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
