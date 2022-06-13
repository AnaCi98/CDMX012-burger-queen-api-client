/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useState, useEffect } from 'react';
// import { dataProducts } from '../../data';

export default function KitchenProducts({ orders }) {
  const [dishesQty, setDishesQty] = useState();

  const ordersSummary = () => {
    const allDishes = [];
    const dishes = {
      dish: 0,
      dishBreakfast: 0,
      dish3: 0,
      dishBreakfast4: 0,
    };
    orders ? orders.forEach((order) => {
      order.products.forEach((p) => allDishes.push({
        product: (p.product),
        qty: (p.qty),
      }));
    }) : null;
    allDishes.filter((d) => d.product === 'dish').forEach((d) => dishes.dish += d.qty);
    allDishes.filter((d) => d.product === 'dish3').forEach((d) => dishes.dish3 += d.qty);
    allDishes.filter((d) => d.product === 'dish-breakfast').forEach((d) => dishes.dishBreakfast += d.qty);
    allDishes.filter((d) => d.product === 'dish-breakfast4').forEach((d) => dishes.dishBreakfast4 += d.qty);
    console.log(dishes);
    setDishesQty(dishes);
  };

  useEffect(() => {
    ordersSummary();
  }, []);

  return (
    <table summary="Cantidades de productos en producción">
      <caption>Resumen de órdenes</caption>
      <thead>
        <tr>
          <th scope="column">Producto</th>
          <th scope="column">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {dishesQty
          ? (
            <>
              <tr>
                <th scope="row">dish</th>
                <td>{dishesQty.dish}</td>
              </tr>
              <tr>
                <th scope="row">dish3</th>
                <td>{dishesQty.dish3}</td>
              </tr>
              <tr>
                <th scope="row">dish-breakfast</th>
                <td>{dishesQty.dishBreakfast}</td>
              </tr>
              <tr>
                <th scope="row">dish-breakfast4</th>
                <td>{dishesQty.dishBreakfast4}</td>
              </tr>
            </>
          )
          : null }
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="2">Total</th>
          <td colSpan="2">88</td>
        </tr>
      </tfoot>
    </table>
  );
}
