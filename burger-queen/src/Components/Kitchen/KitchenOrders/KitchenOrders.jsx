/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import './KitchenOrders.css';

export default function KitchenOrders({ orders }) {
  const handleClickOrder = (order) => {
    console.log(order);
  };
  return (
    <div className="kitchen-order">
      {orders ? orders.filter((order) => (order.status === 'pending')).map((order) => (
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
