import { useApi } from "../../hooks/useApi";
import Botones from "../Buttons/ButtonsTable";

const ContratosTable = () => {
  const apiUrl = "http://capsla.test/api/direccion/";
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
                    <th>Estado</th>
                    <th>Código Postal</th>
                    <th>Municipio</th>
                    <th>Colonia</th>
                    <th>Calle</th>
                    <th>Numero Interior</th>
                    <th>Numero Exterior</th>
                    <th>Referencias</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {dataAPI.data.map((direccion: any) => (
                    <tr key={direccion.iddireccion}>
                      <td>{direccion.iddireccion}</td>
                      <td>{direccion.estatus || "N/A"}</td>
                      <td>{direccion.codigo_postal || "N/A"}</td>
                      <td>{direccion.municipio || "N/A"}</td>
                      <td>{direccion.colonia || "N/A"}</td>
                      <td>{direccion.calle || "N/A"}</td>
                      <td>{direccion.numero_interior || "N/A"}</td>
                      <td>{direccion.numero_exterior || "N/A"}</td>
                      <td>{direccion.refrencias || "N/A"}</td>
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
              <button className="btn btn-outline-primary btn-sm">
                Anterior
              </button>
              <span className="page-number">1</span>
              <button className="btn btn-outline-primary btn-sm">
                Siguiente
              </button>
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
