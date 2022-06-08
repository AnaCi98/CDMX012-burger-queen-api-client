/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function Admin({ getOutSession }) {
  const navigate = useNavigate();

  const signOutSession = async () => {
    await getOutSession();
  };

  return (
    <section className="adminSection">
      <button className="admin-btn" onClick={() => { navigate('/workers'); }} type="submit">
        Trabajadores
      </button>
      <button className="admin-btn" onClick={() => { navigate('/products'); }} type="submit">
        Productos
      </button>
      <button className="admin-btn" type="button" onClick={() => { signOutSession(); }}>
        Cerrar sesion
      </button>
    </section>

  );
}

export default Admin;
