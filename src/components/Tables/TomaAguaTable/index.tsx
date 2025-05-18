import Botones from "../../Buttons/ButtonsTable";

const TomaAgua = () => {
  // Datos simulados
  const datosTomas = [
    {
      idtoma_agua: 1,
      tipo_toma: "Doméstica",
      estatus: "Activa",
      direccion: {
        calle: "Av. Hidalgo",
        colonia: "Centro",
        numero_exterior: "123",
        numero_interior: "2B",
      },
      cliente: {
        nombre: "María",
        a_paterno: "Gómez",
        a_materno: "Luna",
      },
    },
    {
      idtoma_agua: 2,
      tipo_toma: "Comercial",
      estatus: "Suspendida",
      direccion: {
        calle: "Calle 5",
        colonia: "San Juan",
        numero_exterior: "45",
        numero_interior: "",
      },
      cliente: {
        nombre: "José",
        a_paterno: "Ramírez",
        a_materno: "Hernández",
      },
    },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Lista de tomas de agua</h4>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Toma de agua</th>
                <th>Estatus</th>
                <th>Dirección</th>
                <th>Cliente</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {datosTomas.map((toma) => (
                <tr key={toma.idtoma_agua}>
                  <td>{toma.idtoma_agua}</td>
                  <td>{toma.tipo_toma}</td>
                  <td>{toma.estatus}</td>
                  <td>
                    {toma.direccion.calle}, {toma.direccion.colonia}
                    <br />
                    Ext: {toma.direccion.numero_exterior} | Int:{" "}
                    {toma.direccion.numero_interior || "N/A"}
                  </td>
                  <td>
                    {toma.cliente.nombre} {toma.cliente.a_paterno}{" "}
                    {toma.cliente.a_materno}
                  </td>
                  <td>
                    <Botones />
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

export default TomaAgua;

/*
import { useApi } from "../../hooks/useApi";
import Botones from "../Buttons/ButtonsTable";

const TomaAgua = () => {
  const apiUrl = "http://capsla.test/api/toma_agua/"; 
  const { dataAPI, error } = useApi(apiUrl);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Lista de tomas de agua</h4>

        {error && <p className="text-danger">Error: {error}</p>}

        {Array.isArray(dataAPI?.data) && dataAPI.data.length > 0 ? (
          <div className="table-responsive">
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Toma de agua</th>
                    <th>Estatus</th>
                    <th>Dirección</th>
                    <th>Cliente</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {dataAPI.data.map((toma: any) => (
                    <tr key={toma.idtoma_agua}>
                      <td>{toma.idtoma_agua}</td>
                      <td>{toma.tipo_toma || "N/A"}</td>
                      <td>{toma.estatus || "N/A"}</td>
                      <td>
                        {toma.direccion?.calle || "N/A"},{" "}
                        {toma.direccion?.colonia || "N/A"} <br />
                        Ext: {toma.direccion?.numero_exterior || "N/A"} | Int:{" "}
                        {toma.direccion?.numero_interior || "N/A"}
                      </td>
                      <td>
                        {toma.cliente?.nombre || "N/A"}{" "}
                        {toma.cliente?.a_paterno || ""}{" "}
                        {toma.cliente?.a_materno || ""}
                      </td>
                      <td>
                        <Botones />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>Cargando tomas de agua...</p>
        )}
      </div>
    </div>
  );
};

export default TomaAgua;
*/
