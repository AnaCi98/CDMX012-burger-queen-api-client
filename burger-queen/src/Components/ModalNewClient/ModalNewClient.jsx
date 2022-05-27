/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import './ModalNewClient.css';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function ModalNewClient({
  modal,
  closeModal,
  // activeName,
  getClientName,
}) {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  // const [newOrder, setNewOrder] = useState({});

  const handleSubmitClick = (idClient) => {
    getClientName(idClient);
    navigate('/order');
    console.log(idClient);
    /*
    setNewOrder({
      client: idClient,
      userId: activeName,
      products: [
        {
          product: {
            qty: 0,
            product: {},
          },
        },
      ],
      status: 'pending',
      dateEntry: '00:00',
      dateProcessed: '00:00',
    });
    console.log(newOrder);
     */
  };

  if (modal) {
    return (
      <div className="Modal">
        <div className="Modal-box">
          <section className="Modal-header">
            <h1 className="Modal-header-title">Nuevo cliente</h1>
            <button type="button" className="Modal-close" onClick={() => { closeModal(); }}>x</button>
          </section>
          <form>
            <section className="Modal-body">
              <input type="text" className="Modal-body-input" placeholder="Nombre" onChange={(e) => { setName(e.target.value); }} />
            </section>
            <section className="Modal-footer">
              <button type="submit" className="Modal-submit" onClick={() => { handleSubmitClick(name); }}>Agregar</button>
            </section>
          </form>
        </div>
      </div>
    );
  } return null;
}
export default ModalNewClient;
