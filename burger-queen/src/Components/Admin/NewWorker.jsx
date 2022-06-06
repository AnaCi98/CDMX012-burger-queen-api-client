/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import './NewWorker.css';

export default function NewWorker({ modalNewWorker, closeModal }) {
  if (modalNewWorker) {
    return (
      <section className="New-worker-section">
        <form>
          <p onClick={() => { closeModal(); }}>Cerrar</p>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Correo electronico" />
          <input type="password" placeholder="Contraseña" />
          <select name="rol">
            <option selected hidden>Rol</option>
            <option value="meserx">Meserx</option>
            <option value="cocina">Cocina</option>
          </select>
          <select name="turno">
            <option selected hidden>Turno</option>
            <option value="meserx">Matutino</option>
            <option value="cocina">Vespertino</option>
          </select>
          <button type="submit" className="Add-worker">
            Crear
          </button>
        </form>
      </section>
    );
  } return null;
}
