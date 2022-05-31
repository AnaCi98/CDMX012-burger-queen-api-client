/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './OrderSummary.css';

function OrderSummary({
  structureList, addOrder, summary, closeSummary,
}) {
  const navigate = useNavigate();

  if (summary) {
    return (
      <section>
        <img onClick={() => { closeSummary(); }} className="BackOrder" alt="button to return" src="../img/Back.png" />
        <section className="OrderSummary">
          <p>Resumen de la orden</p>
          <table>
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
                  <td>{product.price}</td>
                </tr>
              )) : null}
              <tr>
                <td> </td>
                <td>Total</td>
                <td> Suma</td>
              </tr>
            </tbody>
          </table>
          <button type="submit" onClick={() => { addOrder(); navigate('/waiter'); }}>
            Confirmar
          </button>
        </section>
      </section>

    );
  }
  return null;
}
export default OrderSummary;
