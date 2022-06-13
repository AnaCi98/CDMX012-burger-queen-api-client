/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import './KitchenOrders.css';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import OrderSummary from '../../Order/OrderSummary';

export default function KitchenOrders({ orders, dataOrders }) {
  const [openSummary, setOpenSummary] = useState();
  const [currentOrder, setCurrentOrder] = useState();
  const [orderId, setOrderId] = useState();
  // const [orders, setOrders] = useState();

  // const navigate = useNavigate();

  const handleClickOrder = (order) => {
    console.log(order);
    setOrderId(order.id);
    setCurrentOrder(order.products);
    setOpenSummary(true);
  };

  const closeSummary = () => setOpenSummary(false);

  const changeStatusKitchen = () => {
    const date = new Date();
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const putMethod = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8', // Indicates the content
      },
      body: JSON.stringify({
        status: 'delivering',
        dateProcessed: [hour, minutes, seconds],
      }),
    };
    return fetch(`https://629d281fc6ef9335c0998121.mockapi.io/order/${orderId}`, putMethod).then((responses) => responses.json().products);
  };

  const render = async () => {
    await changeStatusKitchen().then(() => dataOrders());
  };

  return (
    <div className="kitchen-order">
      <OrderSummary
        structureList={currentOrder}
        addOrder={render}
        summary={openSummary}
        closeSummary={closeSummary}
        view
        confirmation="Listo para entregar"
      />
      {orders ? orders.map((order) => (
        <object className="order-postit" key={order.id} id={order.id} onClick={() => handleClickOrder(order)}>
          <p>{order.id}</p>
          <p className="order-date-entry">
            {order.dateEntry[0]}
            :
            {order.dateEntry[1]}
          </p>
        </object>
      )) : null }
    </div>
  );
}
