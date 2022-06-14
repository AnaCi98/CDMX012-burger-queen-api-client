/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './Admin.css';

function ListEmployees({ workers, editFunction, deleteEmployee }) {
  return (
    <section className="Table-section-workers">
      <table className="Workers-table">
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Correo electronico</th>
            <th>Rol</th>
            <th>Turno</th>
          </tr>
          { workers?.map((worker) => (
            <tr>
              <td>
                {worker.nombre}
              </td>
              <td>
                {worker.correo}
              </td>
              <td>
                {worker.rol}
              </td>
              <td>
                {worker.turno}
              </td>
              <td>
                <img className="Edit-workers" alt="button to edit" src="../img/Edit.png" onClick={() => { editFunction(worker); console.log(worker); }} />
                <img className="Delete-workers" alt="button to delete" src="../img/Delete.png" onClick={() => deleteEmployee(worker.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ListEmployees;
