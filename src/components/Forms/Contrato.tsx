function Contrato() {
  return (
    <section>
      <h3>Contrato</h3>
      <div className="form-group">
        <label htmlFor="numContrato">Número de contrato</label>
        <input
          className="form-control"
          name="numContrato"
          placeholder="Número de contrato"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="fechaInicio">Fecha de inicio</label>
        <input
          className="form-control"
          name="fechaInicio"
          placeholder="Fecha de inicio"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="fechaFin">Fecha fin</label>
        <input
          className="form-control"
          name="fechaFin"
          placeholder="Fecha fin"
          required
        />
      </div>
    </section>
  );
}
export default Contrato;