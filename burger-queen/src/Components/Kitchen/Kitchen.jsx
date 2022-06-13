import { useState, useEffect } from 'react';
import './Kitchen.css';
import KitchenClock from './KitchenClock/KitchenClock';
import KitchenOrders from './KitchenOrders/KitchenOrders';
// import KitchenProducts from './KitchenProducts/KitchenProducts';
import { dataProducts } from '../data';
import KitchenProducts from './KitchenProducts/KitchenProducts';

// eslint-disable-next-line react/prop-types
function Kitchen({ activeName, getOutSession }) {
  const [orders, setOrders] = useState();

  const dataOrders = async () => {
    const allOrders = await dataProducts('order');
    setOrders(allOrders.filter((order) => order.status === 'pending'));
  };

  useEffect(() => {
    dataOrders();
  }, []);

  const handleSignOutClick = () => {
    getOutSession();
  };
  console.log(activeName);
  return (
    <>
      <section className="kitchen-topbar">
        <article className="orders-side">
          <section className="clients-title">
            <p>
              Órdenes activas
            </p>
          </section>
          <KitchenOrders orders={orders} dataOrders={dataOrders} />
        </article>
        <KitchenClock />
      </section>
      <section className="kitchen-down">
        <KitchenProducts orders={orders} />
        <button type="button" className="End-session" onClick={() => handleSignOutClick()}>Fin de turno</button>
      </section>
    </>
  );
}

export default Kitchen;
