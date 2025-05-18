import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { useApi } from "../hooks/useApi";

const Ejemplo = () => {
  const apiUrl = "http://capsla.test/api/direccion/";
  const { dataAPI, error } = useApi(apiUrl);
  const tableRef = useRef(null);

  // Inicializa DataTables cuando se reciben los datos
  useEffect(() => {
    if (dataAPI?.data?.length) {
      const table = $(tableRef.current).DataTable(); // inicia DataTable
      return () => table.destroy(); // limpia al desmontar o actualizar
    }
  }, [dataAPI]);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Direcciones</h4>
        {error && <p className="text-danger">Error: {error}</p>}
        <div className="row">
          <div className="col-12">
            <table ref={tableRef} className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ubicación</th>
                  <th>Domicilio</th>
                  <th>Referencias</th>
                  <th>Cliente</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(dataAPI?.data) &&
                  dataAPI.data.map((direccion: any) => (
                    <tr key={direccion.iddireccion}>
                      <td>{direccion.iddireccion}</td>
                      <td>
                        {direccion.estado || "N/A"},{" "}
                        {direccion.municipio || "N/A"},<br />
                        C.P. {direccion.codigo_postal || "N/A"}
                      </td>
                      <td>
                        {direccion.colonia || "N/A"}, {direccion.calle || "N/A"}
                        <br />
                        Ext: {direccion.numero_exterior || "N/A"} | Int:{" "}
                        {direccion.numero_interior || "N/A"}
                      </td>
                      <td>{direccion.referencias || "N/A"}</td>
                      <td>{direccion.cliente || "N/A"}</td>
                      <td>
                        <button className="btn btn-outline-primary">Ver</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ejemplo;
