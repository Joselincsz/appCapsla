import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-bs4";
import { useApi } from "../../../hooks/useApi";
import Button from "../../Buttons/index";
import NuevaDireccion from "../../Modals/DireccionModals";

const DireccionTable = () => {
  const apiUrl = "http://capsla.test/api/direccion/";
  const { dataAPI, error } = useApi(apiUrl);
  const tableRef = useRef(null);

  const [calleBuscar, setCalleBuscar] = useState("");
  const [modalAbierto, setModalAbierto] = useState(false);
  const [direccionSeleccionada, setDireccionSeleccionada] = useState<any>(null);

  useEffect(() => {
    if (dataAPI?.data?.length) {
      const table = $(tableRef.current).DataTable();

      if (calleBuscar.trim() !== "") {
        table.columns(2).search(calleBuscar).draw();
      } else {
        table.columns().search("").draw();
      }

      return () => table.destroy();
    }
  }, [dataAPI, calleBuscar]);

  const abrirModalEditar = (direccion: any) => {
    setDireccionSeleccionada(direccion);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setDireccionSeleccionada(null);
  };

  const guardarDireccionEditada = async (direccionEditada: any) => {
    if (!direccionSeleccionada?.iddireccion) return;

    try {
      const response = await fetch(
        `${apiUrl}${direccionSeleccionada.iddireccion}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(direccionEditada),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar la dirección");
      }

      alert("Dirección actualizada correctamente");
      window.location.reload(); // o recarga manual con setState si prefieres
    } catch (error) {
      console.error("Error actualizando dirección:", error);
      alert("Ocurrió un error al actualizar la dirección");
    }

    cerrarModal();
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Direcciones</h4>
        {error && <p className="text-danger">Error: {error}</p>}

        <div className="row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por calle..."
              value={calleBuscar}
              onChange={(e) => setCalleBuscar(e.target.value)}
            />
            <br />
          </div>
        </div>

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
                        <Button
                          className="edit"
                          onClick={() => abrirModalEditar(direccion)}
                        >
                          ✏️
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modalAbierto && direccionSeleccionada && (
        <NuevaDireccion
          onCerrar={cerrarModal}
          onGuardar={guardarDireccionEditada}
          direccionInicial={direccionSeleccionada}
        />
      )}
    </div>
  );
};

export default DireccionTable;
