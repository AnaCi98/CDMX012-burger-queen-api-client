/* eslint-disable react/prop-types */
import './ModalConfirmation.css';

export default function ModalConfirmation({
  closeConfirmation, confirmation, id, deleteEmployee,
}) {
  if (confirmation) {
    return (
      <section className="Modal-confirmation">
        <p>¿Estás segure?</p>
        <p>El contenido será eliminado y no podrá ser recuperado</p>
        <section className="buttons-confirmation">
          <button type="button" onClick={closeConfirmation}>Cancelar</button>
          <button type="button" onClick={() => { deleteEmployee(id); closeConfirmation(); }}>Eliminar</button>
        </section>
      </section>
    );
  } return null;
}
