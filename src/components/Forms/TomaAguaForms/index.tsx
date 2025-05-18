function TomaAgua() {
  return (
    <section>
      <h3>Información de Toma de Agua</h3>

      <div className="form-group">
        <label htmlFor="tipoToma">Tipo de toma</label>
        <select id="tipoToma" className="form-control">
          <option value="">Seleccione una opción</option>
          <option value="domestico">Doméstico</option>
          <option value="negocio">Negocio</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="estatusToma">Estatus</label>
        <select id="tipoToma" className="form-control">
          <option value="">Seleccione una opción</option>
          <option value="domestico">Activo</option>
          <option value="negocio">Inactivo</option>
        </select>
      </div>
    </section>
  );
}

export default TomaAgua;
