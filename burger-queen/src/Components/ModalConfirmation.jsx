/* eslint-disable react/prop-types */
import './ModalConfirmation.css';

export default function ModalConfirmation({ closeConfirmation, confirmation }) {
  if (confirmation) {
    return (
      <section className="Modal-confirmation">
        <p>¿Estas segure?</p>
        <p>El contenido será eliminado y no podrá ser recuperado</p>
        <section className="buttons-confirmation">
          <button type="button" onClick={closeConfirmation}>Cancelar</button>
          <button type="button">Eliminar</button>
        </section>
      </section>
    );
  } return null;
}
