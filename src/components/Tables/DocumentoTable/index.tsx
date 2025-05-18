import Botones from "../../Buttons/ButtonsTable";

const DocumentosTable = () => {
  // Datos simulados
  const documentos = [
    {
      iddocumento: 1,
      ruta_documento: "/uploads/docs/contrato_001.pdf",
      contrato: {
        numero_contrato: "CT-2023-001",
        cliente: {
          nombre: "Ana",
          a_paterno: "Martínez",
          a_materno: "Sánchez",
        },
      },
    },
    {
      iddocumento: 2,
      ruta_documento: "/uploads/docs/contrato_002.pdf",
      contrato: {
        numero_contrato: "CT-2023-002",
        cliente: {
          nombre: "Luis",
          a_paterno: "Rodríguez",
          a_materno: "Pérez",
        },
      },
    },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Lista de documentos</h4>

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

        <div className="table-responsive">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID Documento</th>
                  <th>Ruta Documento</th>
                  <th>Número de Contrato</th>
                  <th>Cliente</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {documentos.map((documento) => (
                  <tr key={documento.iddocumento}>
                    <td>{documento.iddocumento}</td>
                    <td>
                      {documento.ruta_documento.length > 40
                        ? documento.ruta_documento.substring(0, 40) + "..."
                        : documento.ruta_documento}
                    </td>
                    <td>{documento.contrato.numero_contrato}</td>
                    <td>
                      {documento.contrato.cliente.nombre}{" "}
                      {documento.contrato.cliente.a_paterno}{" "}
                      {documento.contrato.cliente.a_materno}
                    </td>
                    <td>
                      <Botones />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginación */}
          <div className="pagination d-flex justify-content-end align-items-center mt-3 gap-2">
            <button className="btn btn-outline-primary btn-sm">Anterior</button>
            <span className="page-number">1</span>
            <button className="btn btn-outline-primary btn-sm">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentosTable;


/*
import { useApi } from "../../hooks/useApi";
import Botones from "../Buttons/ButtonsTable";

const DocumentosTable = () => {
  const apiUrl = "http://capsla.test/api/documentos/"; // Cambia a tu endpoint real
  const { dataAPI, error } = useApi(apiUrl);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Lista de documentos</h4>

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
                    <th>ID Documento</th>
                    <th>Ruta Documento</th>
                    <th>Número de Contrato</th>
                    <th>Cliente</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {dataAPI.data.map((documento: any) => (
                    <tr key={documento.iddocumento}>
                      <td>{documento.iddocumento}</td>
                      <td>
                        {documento.ruta_documento
                          ? documento.ruta_documento.length > 40
                            ? documento.ruta_documento.substring(0, 40) + "..."
                            : documento.ruta_documento
                          : "N/A"}
                      </td>
                      <td>{documento.contrato?.numero_contrato || "N/A"}</td>
                      <td>
                        {documento.contrato?.cliente
                          ? `${documento.contrato.cliente.nombre} ${documento.contrato.cliente.a_paterno} ${documento.contrato.cliente.a_materno}`
                          : "N/A"}
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
          <p>Cargando documentos...</p>
        )}
      </div>
    </div>
  );
};

export default DocumentosTable;
*/