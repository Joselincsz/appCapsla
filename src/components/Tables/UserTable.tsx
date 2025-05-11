import { useApi } from "../../hooks/useApi";

const Usuarios = () => {
  const apiUrl = "http://almacenplus.test/api/user/";
  const { dataAPI, error } = useApi(apiUrl);

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">Perfil de usuarios</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Usuarios</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tabla dinámica
              </li>
            </ol>
          </nav>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Lista de usuarios</h4>
            {error && <p className="text-danger">Error: {error}</p>}
            {dataAPI.length > 0 ? (
              <div className="row">
                <div className="col-12">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Nombre completo</th>
                        <th>Teléfono</th>
                        <th>Celular</th>
                        <th>Correo electrónico</th>
                        <th>Estado</th>
                        <th>Usuario</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataAPI.map((user, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {user.nombre} {user.a_paterno} {user.a_materno}
                          </td>
                          <td>{user.telefono}</td>
                          <td>{user.celular}</td>
                          <td>{user.correo_electronico}</td>
                          <td>
                            <label
                              className={`badge ${
                                user.activo === 1
                                  ? "badge-success"
                                  : "badge-danger"
                              }`}
                            >
                              {user.activo === 1 ? "Activo" : "Inactivo"}
                            </label>
                          </td>
                          <td>{user.usuario}</td>
                          <td>
                            <button className="btn btn-sm btn-primary mr-2">
                              ✏️
                            </button>
                            <button className="btn btn-sm btn-danger">
                              🗑️
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p>Cargando usuarios...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
