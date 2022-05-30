/* eslint-disable react/prop-types */
import './ClientsButtons.css';

function ClientsButton({ orders }) {
  return (
    orders ? orders.map((order) => (
      <button type="button" className="Client-button" id={order.id}>
        <p>{order.client}</p>
      </button>
    )) : null
  );
}

export default ClientsButton;
