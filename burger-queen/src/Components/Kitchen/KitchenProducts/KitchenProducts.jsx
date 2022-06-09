/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function KitchenProducts({ orders }) {
  // orders.filter((order) => (order.status === 'pending'))

  return (
    <table summary="Cantidades de productos en producción">
      <caption>Resumen de órdenes</caption>
      <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {orders ? orders.filter((order) => (order.status === 'pending')).map((order) => (
          <tr>
            <th scope="row">{order.products.product}</th>
            <td>{order.products.qty}</td>
          </tr>
        )) : null}
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
