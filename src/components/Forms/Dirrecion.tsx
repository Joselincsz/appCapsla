function Direccion() {
  return (
    <section>
      <h3>Dirección</h3>
      <div className="form-group">
        <label htmlFor="codigoPostal">Código Postal</label>
        <input
          type="text"
          id="codigoPostal"
          className="form-control"
          placeholder="Ej. 01100"
        />
      </div>
      <div className="form-group">
        <label htmlFor="mapSearch">Buscar dirección (Google Maps)</label>
        <input
          id="mapSearch"
          className="form-control"
          type="text"
          placeholder="Escribe una dirección o colonia"
        />
      </div>
      <div
        id="map"
        style={{
          height: 300,
          width: "100%",
          border: "1px solid #ccc",
          marginBottom: 20,
        }}
      />
      <div className="form-group">
        <label htmlFor="calle">Estado</label>
        <input
          type="text"
          id="calle"
          className="form-control"
          placeholder="Calle"
        />
      </div>
      <div className="form-group">
        <label htmlFor="numero">Municipio</label>
        <input
          type="text"
          id="numero"
          className="form-control"
          placeholder="Número exterior/interior"
        />
      </div>
      <div className="form-group">
        <label htmlFor="colonia">Colonia</label>
        <input
          type="text"
          id="colonia"
          className="form-control"
          placeholder="Colonia"
        />
      </div>
      <div className="form-group">
        <label htmlFor="municipio">Calle</label>
        <input
          type="text"
          id="municipio"
          className="form-control"
          placeholder="Municipio o delegación"
        />
      </div>
      <div className="form-group">
        <label htmlFor="estado">Número interior</label>
        <input
          type="text"
          id="estado"
          className="form-control"
          placeholder="Estado"
        />
      </div>
      <div className="form-group">
        <label htmlFor="estado">Número exterior</label>
        <input
          type="text"
          id="estado"
          className="form-control"
          placeholder="Estado"
        />
      </div>
      <div className="form-group">
        <label htmlFor="referencias">Referencias</label>
        <textarea
          id="referencias"
          className="form-control"
          placeholder="Cerca de..., entre calles, etc."
          defaultValue={""}
        />
      </div>
    </section>
  );
}

export default Direccion;
