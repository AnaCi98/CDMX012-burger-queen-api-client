import { React } from 'react';
import './ModalNewClient.css';
// eslint-disable-next-line react/prop-types
function ModalNewClient({ modal, closeModal }) {
  // eslint-disable-next-line no-unused-vars
  /*  useEffect(() => {
    console.log(modal);
  }, [statusModal]);
 */
  if (modal) {
    return (
      <div className="Modal">
        <div className="Modal-box">
          <section className="Modal-header">
            <h1 className="Modal-header-title">Nuevo cliente</h1>
            <button type="button" className="Modal-close" onClick={() => { closeModal(); }}>x</button>
          </section>
          <section className="Modal-body">
            <input type="text" className="Modal-body-input" placeholder="Nombre" />
          </section>
          <section className="Modal-footer">
            <button type="submit" className="Modal-submit">Agregar</button>
          </section>
        </div>
      </div>
    );
  } return null;
}
export default ModalNewClient;
