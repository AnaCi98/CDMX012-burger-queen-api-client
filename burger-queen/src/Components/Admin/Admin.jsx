/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
function Admin(props) {
  const { getOutSession } = props;
  return (
    <section>
      <p>Admin en construcción</p>
      <p onClick={() => { getOutSession(); }}>SALIR</p>
    </section>

  );
}

export default Admin;
