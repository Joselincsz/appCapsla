import React, { useEffect } from "react";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";

function Documentos() {
  useEffect(() => {
    $(".dropify").dropify();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/ruta-de-tu-servidor", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al subir los documentos");
      }

      alert("Documentos subidos correctamente");
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al subir los documentos.");
    }
  };

  return (
    <section>
      <h3>Documentación</h3>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="credencial">Credencial de Elector</label>
          <input
            type="file"
            id="credencial"
            name="documentos[credencial]"
            className="dropify"
            data-height="100"
          />
        </div>

        <div className="form-group">
          <label htmlFor="predial">Recibo Predial</label>
          <input
            type="file"
            id="predial"
            name="documentos[predial]"
            className="dropify"
            data-height="100"
          />
        </div>

        <div className="form-group">
          <label htmlFor="constancia">
            Constancia de Seguimiento o Contrato de Compra-Venta
          </label>
          <input
            type="file"
            id="constancia"
            name="documentos[constancia]"
            className="dropify"
            data-height="100"
          />
        </div>
      </form>
    </section>
  );
}

export default Documentos;
