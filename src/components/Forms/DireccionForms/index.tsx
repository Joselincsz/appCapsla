import React, { useState } from "react";
import axios from "axios";

function Direccion() {
  const [formData, setFormData] = useState({
    codigo_postal: "",
    estado: "",
    municipio: "",
    colonia: "",
    calle: "",
    numero_interior: "",
    numero_exterior: "",
    referencias: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://capsla.test/api/direccion",
        formData
      );
      alert(response.data.message);
      setFormData({
        codigo_postal: "",
        estado: "",
        municipio: "",
        colonia: "",
        calle: "",
        numero_interior: "",
        numero_exterior: "",
        referencias: "",
      });
    } catch (error) {
      if (error.response && error.response.data.errors) {
        alert(
          "Errores: " +
            Object.values(error.response.data.errors).flat().join(", ")
        );
      } else {
        alert("Error al guardar la dirección.");
      }
    }
  };

  return (
    <section>
      <h3>Información de Dirección</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="codigo_postal">Código Postal</label>
          <input
            type="text"
            id="codigo_postal"
            className="form-control"
            placeholder="Ej. 01100"
            value={formData.codigo_postal}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="estado">Estado</label>
          <input
            type="text"
            id="estado"
            className="form-control"
            placeholder="Estado"
            value={formData.estado}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="municipio">Municipio</label>
          <input
            type="text"
            id="municipio"
            className="form-control"
            placeholder="Municipio o delegación"
            value={formData.municipio}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="colonia">Colonia</label>
          <input
            type="text"
            id="colonia"
            className="form-control"
            placeholder="Colonia"
            value={formData.colonia}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="calle">Calle</label>
          <input
            type="text"
            id="calle"
            className="form-control"
            placeholder="Calle"
            value={formData.calle}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="numero_interior">Número interior</label>
          <input
            type="text"
            id="numero_interior"
            className="form-control"
            placeholder="Número interior"
            value={formData.numero_interior}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="numero_exterior">Número exterior (Opcional)</label>
          <input
            type="text"
            id="numero_exterior"
            className="form-control"
            placeholder="Número exterior"
            value={formData.numero_exterior}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="referencias">Referencias</label>
          <textarea
            id="referencias"
            className="form-control"
            placeholder="Cerca de..., entre calles, etc."
            value={formData.referencias}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar Dirección
        </button>
      </form>
    </section>
  );
}

export default Direccion;
