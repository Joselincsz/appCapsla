import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Contrato() {
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  return (
    <section>
      <h3>Información de Contrato</h3>

      <div className="form-group">
        <label htmlFor="numContrato">Número de contrato</label>
        <input
          className="form-control"
          name="numContrato"
          placeholder="Número de contrato"
          required
        />
      </div>

      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="fechaInicio">Fecha de inicio</label>
          <div className="input-group">
            <DatePicker
              selected={fechaInicio}
              onChange={(date) => setFechaInicio(date)}
              className="form-control"
              placeholderText="Selecciona fecha de inicio"
              dateFormat="dd/MM/yyyy"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="mdi mdi-calendar"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="fechaFin">Fecha fin</label>
          <div className="input-group">
            <DatePicker
              selected={fechaFin}
              onChange={(date) => setFechaFin(date)}
              className="form-control"
              placeholderText="Selecciona fecha fin"
              dateFormat="dd/MM/yyyy"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="mdi mdi-calendar"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contrato;
