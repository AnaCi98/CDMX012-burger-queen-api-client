import './Waiter.css';

function Waiter() {
  return (
    <div className="Waiter">
      <object className="Clients-section">
        <section className="Clients-title">
          Órdenes
          <button className="Clients-add" id="CientsAdd" type="button">+</button>
        </section>
        <section>Bienvenidx a tu turno</section>
      </object>
    </div>
  );
}

export default Waiter;
