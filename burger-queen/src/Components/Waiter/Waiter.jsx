import './Waiter.css';

function Waiter() {
  return (
    <div className="Waiter">
      <object className="Clients-section">
        <section className="Clients-title">
          Órdenes
          <button className="Clients-add" id="CientsAdd" type="button">+</button>
        </section>
        <section className="Clients-orders-section">Bienvenidx a tu turno</section>
      </object>
      <aside className="Nav-right">
        <section className="Notifications">
          <img className="Bell-icon" alt="bell icon" src="../img/BellIcon.png" />
          <p className="Notifications-Text" />
        </section>
        <button className="End-session" id="EndSession" type="button">Fin de Turno</button>
      </aside>
    </div>
  );
}

export default Waiter;
