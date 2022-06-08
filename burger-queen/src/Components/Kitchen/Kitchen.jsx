import { useState, useEffect } from 'react';
import './Kitchen.css';
import KitchenClock from './KitchenClock/KitchenClock';
import KitchenOrders from './KitchenOrders/KitchenOrders';
import KitchenProducts from './KitchenProducts/KitchenProducts';
import { dataProducts } from '../data';

// eslint-disable-next-line react/prop-types
function Kitchen({ activeName, getOutSession }) {
  const [orders, setOrders] = useState();

  const dataOrders = async () => {
    const allOrders = await dataProducts('order');
    setOrders(allOrders);
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
          <KitchenOrders orders={orders} />
        </article>
        <KitchenClock />
      </section>
      <section>
        <p>Detalles de productos</p>
        <KitchenProducts orders={orders} />
      </section>
      <button type="button" className="exit-button" onClick={() => handleSignOutClick()}>Salir de turno</button>
    </>
  );
}

export default Kitchen;
