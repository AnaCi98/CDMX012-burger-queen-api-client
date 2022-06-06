/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './OrderSummary.css';

function OrderSummary({
  structureList, addOrder, summary, closeSummary, view,
}) {
  const navigate = useNavigate();

  const totalOrder = (list) => {
    const array = list.map((product) => (parseInt(product.price, 10)) * product.qty);
    const total = array.reduce((a, b) => a + b, 0);
    return total;
  };

  if (summary) {
    return (
      <section>
        <section className="OrderSummary">
          <img onClick={() => { closeSummary(); }} className="BackOrder" alt="button to return" src="../img/Back.png" />
          <p>Resumen de la orden</p>
          <table className="tableSummary">
            <tbody>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>$</th>
              </tr>
              { structureList ? structureList.map((product) => (
                <tr>
                  <td>{product.product}</td>
                  <td>{product.qty}</td>
                  <td>
                    $
                    {' '}
                    {(product.price) * product.qty}
                  </td>
                </tr>
              )) : null}
              <tr>
                <td> </td>
                <td>Total</td>
                <td>
                  $
                  {' '}
                  {totalOrder(structureList)}
                  {' '}
                </td>
              </tr>
            </tbody>
          </table>
          { view ? (
            <button type="submit" onClick={() => { addOrder(); navigate('/waiter'); }}>
              Confirmar
            </button>
          ) : null }
        </section>
      </section>

    );
  }
  return null;
}
export default OrderSummary;
