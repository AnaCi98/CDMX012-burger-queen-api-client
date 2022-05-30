/* eslint-disable react/prop-types */
import { useState } from 'react';
import OrderSummary from '../Order/OrderSummary';
import './ClientsButtons.css';
// import { useNavigate } from 'react-router-dom';

function ClientsButton({ orders }) {
  const [currentOrder, setCurrentOrder] = useState(null);
  const [openSummary, setOpenSummary] = useState(false);

  const handleClickOrder = (order) => {
    setCurrentOrder(order.products);
    setOpenSummary(true);
  };
  const closeSummary = () => setOpenSummary(false);

  return (
    <>
      <OrderSummary
        structureList={currentOrder}
        addOrder={null}
        summary={openSummary}
        closeSummary={closeSummary}
      />
      {orders ? orders.map((order) => (
        <button type="button" className="Client-button" key={order.id} id={order.id} onClick={() => handleClickOrder(order)}>
          <p>{order.client}</p>
        </button>
      )) : null }
    </>
  );
}

export default ClientsButton;
