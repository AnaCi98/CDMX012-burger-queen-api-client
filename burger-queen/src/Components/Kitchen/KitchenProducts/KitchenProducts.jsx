// eslint-disable-next-line react/prop-types
export default function KitchenProducts({ orders }) {
  console.log(orders);
  // orders.filter((order) => (order.status === 'pending'))
  return (
    <table summary="Desglosamiento de productos">
      <caption>Detalle de órdenes</caption>
      <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad por orden</th>
          <th scope="col">Hora de entrada</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {orders ? orders.filter((order) => (order.status === 'pending').map((product) => prod))}
        <tr>
          <th scope="row">order</th>
          <td>1976</td>
          <td>9</td>
          <td>Ever fallen in love (with someone you ve)</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="2">Número total de órdenes</th>
          <td colSpan="2">77</td>
        </tr>
      </tfoot>
    </table>
  );
}
