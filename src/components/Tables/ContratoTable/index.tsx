import Botones from "../../Buttons/ButtonsTable";

const Contrato = () => {
  // Datos simulados
  const contratos = [
    {
      idcontrato: 1,
      numero_contrato: "CT-2023-001",
      fecha_inicio: "2023-01-15",
      fecha_fin: "2024-01-14",
      cliente: {
        nombre: "Ana",
        a_paterno: "Martínez",
        a_materno: "Sánchez",
      },
      direccion: {
        calle: "Calle 10",
        colonia: "Las Flores",
        numero_exterior: "100",
        numero_interior: "5A",
      },
    },
    {
      idcontrato: 2,
      numero_contrato: "CT-2023-002",
      fecha_inicio: "2023-02-01",
      fecha_fin: "2025-01-31",
      cliente: {
        nombre: "Luis",
        a_paterno: "Rodríguez",
        a_materno: "Pérez",
      },
      direccion: {
        calle: "Av. Central",
        colonia: "El Prado",
        numero_exterior: "250",
        numero_interior: "",
      },
    },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Lista de contratos</h4>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Número de contrato</th>
                <th>Fecha inicio</th>
                <th>Fecha fin</th>
                <th>Cliente</th>
                <th>Dirección</th>
                <th>Acciones</th>
                <th>Ver</th>
              </tr>
            </thead>
            <tbody>
              {contratos.map((contrato) => (
                <tr key={contrato.idcontrato}>
                  <td>{contrato.idcontrato}</td>
                  <td>{contrato.numero_contrato}</td>
                  <td>{contrato.fecha_inicio}</td>
                  <td>{contrato.fecha_fin}</td>
                  <td>
                    {contrato.cliente.nombre} {contrato.cliente.a_paterno}{" "}
                    {contrato.cliente.a_materno}
                  </td>
                  <td>
                    {contrato.direccion.calle}, {contrato.direccion.colonia}
                    <br />
                    Ext: {contrato.direccion.numero_exterior} | Int:{" "}
                    {contrato.direccion.numero_interior || "N/A"}
                  </td>
                  <td>
                    <Botones />
                  </td>

                  <td>
                    <button className="btn btn-outline-primary">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contrato;

/*
import { useApi } from "../../hooks/useApi";
import Botones from "../Buttons/ButtonsTable";

const ContratosTable = () => {
  const apiUrl = "http://capsla.test/api/contratos/";
  const { dataAPI, error } = useApi(apiUrl);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Lista de contratos</h4>

        <div className="controls mb-3 d-flex align-items-center gap-2">
          <label htmlFor="entries" className="form-label m-0">
            Mostrar
          </label>
          <select id="entries" className="form-select w-auto">
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
          <span>Entradas</span>
        </div>

        {error && <p className="text-danger">Error: {error}</p>}

        {Array.isArray(dataAPI?.data) && dataAPI.data.length > 0 ? (
          <div className="table-responsive">
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Número de contrato</th>
                    <th>Fecha inicio</th>
                    <th>Fecha fin</th>
                    <th>Cliente</th>
                    <th>Dirección</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {dataAPI.data.map((contrato: any) => (
                    <tr key={contrato.idcontrato}>
                      <td>{contrato.idcontrato}</td>
                      <td>{contrato.numero_contrato}</td>
                      <td>{contrato.fecha_inicio}</td>
                      <td>{contrato.fecha_fin}</td>
                      <td>
                        {contrato.cliente?.nombre} {contrato.cliente?.a_paterno}{" "}
                        {contrato.cliente?.a_materno}
                      </td>
                      <td>
                        {contrato.direccion?.calle}, {contrato.direccion?.colonia}
                        <br />
                        Ext: {contrato.direccion?.numero_exterior} | Int:{" "}
                        {contrato.direccion?.numero_interior || "N/A"}
                      </td>
                      <td>
                        <Botones />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination d-flex justify-content-end align-items-center mt-3 gap-2">
              <button className="btn btn-outline-primary btn-sm">Anterior</button>
              <span className="page-number">1</span>
              <button className="btn btn-outline-primary btn-sm">Siguiente</button>
            </div>
          </div>
        ) : (
          <p>Cargando contratos...</p>
        )}
      </div>
    </div>
  );
};

export default ContratosTable;

*/
