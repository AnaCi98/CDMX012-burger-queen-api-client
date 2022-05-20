import './Waiter.css';

function Waiter() {
  return (
    <div className="Waiter">
      <object className="Table-section">
        <section className="Table-title">Mesas</section>
        <button className="Table" id="Table1" type="button">1</button>
        <button className="Table" id="Table2" type="button">2</button>
        <button className="Table" id="Table3" type="button">3</button>
        <button className="Table" id="Table4" type="button">4</button>
        <button className="Table" id="Table5" type="button">5</button>
        <button className="Table" id="Table6" type="button">6</button>
        <button className="Table" id="Table7" type="button">7</button>
        <button className="Table" id="Table8" type="button">8</button>
        <button className="Table" id="Table9" type="button">9</button>
        <button className="Table" id="Table10" type="button">10</button>
      </object>
      <object className="Clients-section">
        <section className="Clients-title">
          Clientes
          <button className="Clients-add" id="CientsAdd" type="button">+</button>
        </section>
      </object>
    </div>
  );
}

export default Waiter;
