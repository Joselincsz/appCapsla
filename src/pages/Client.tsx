import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MenuIzquierdo from "../components/Sidebar";
import Footer from "../components/Footer";

function Client() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [usuarioEditando, setUsuarioEditando] = useState<any | null>(null);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    a_paterno: "",
    a_materno: "",
    telefono: "",
    celular: "",
    correo_electronico: "",
    contraseña: "",
  });
  const [mostrarFormularioNuevo, setMostrarFormularioNuevo] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  const handleEdit = (id: number) => {
    const usuario = usuarios.find((u) => u.id_usuarios === id);
    setUsuarioEditando(usuario);
  };

  const handleDelete = (id: number) => {
    const confirmar = window.confirm("¿Deseas eliminar este usuario?");
    if (!confirmar) return;

    fetch(`http://localhost:8000/api/usuarios/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo eliminar");
        setUsuarios((prev) => prev.filter((u) => u.id_usuarios !== id));
      })
      .catch((error) => console.error("Error al eliminar:", error));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuarioEditando) return;

    fetch(`http://localhost:8000/api/usuarios/${usuarioEditando.id_usuarios}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuarioEditando),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error en la actualización");
        return res.json();
      })
      .then((data) => {
        setUsuarios((prev) =>
          prev.map((u) => (u.id_usuarios === data.id_usuarios ? data : u))
        );
        setUsuarioEditando(null);
      })
      .catch((err) => console.error("Error al editar:", err));
  };

  return (
    <div className="container-scroller">
      <NavBar />
      <br />
      <div className="container-fluid page-body-wrapper">
        <MenuIzquierdo />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">Usuarios</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Tablas</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Usuarios
                  </li>
                </ol>
              </nav>
            </div>

            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Lista de usuarios</h4>
                <div className="row">
                  <div className="col-12">
                    <button
                      className="btn btn-success mb-3"
                      onClick={() => setMostrarFormularioNuevo(true)}
                    >
                      Agregar Usuario
                    </button>

                    <table className="table">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Apellido Paterno</th>
                          <th>Apellido Materno</th>
                          <th>Teléfono</th>
                          <th>Celular</th>
                          <th>Correo Electrónico</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {usuarios.length > 0 ? (
                          usuarios.map((usuario) => (
                            <tr key={usuario.id_usuarios}>
                              <td>{usuario.nombre}</td>
                              <td>{usuario.a_paterno}</td>
                              <td>{usuario.a_materno}</td>
                              <td>{usuario.telefono}</td>
                              <td>{usuario.celular}</td>
                              <td>{usuario.correo_electronico}</td>
                              <td>
                                <button
                                  className="btn btn-sm btn-primary me-2"
                                  onClick={() =>
                                    handleEdit(usuario.id_usuarios)
                                  }
                                >
                                  Editar
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() =>
                                    handleDelete(usuario.id_usuarios)
                                  }
                                >
                                  Eliminar
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={7}>No hay usuarios disponibles</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />

          {usuarioEditando && (
            <div
              className="modal fade show"
              style={{
                display: "block",
                backgroundColor: "rgba(0,0,0,0.5)",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1050,
              }}
              tabIndex={-1}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <form onSubmit={handleFormSubmit}>
                    <div className="modal-header">
                      <h5 className="modal-title">Editar Usuario</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setUsuarioEditando(null)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Nombre"
                        value={usuarioEditando.nombre}
                        onChange={(e) =>
                          setUsuarioEditando({
                            ...usuarioEditando,
                            nombre: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Apellido Paterno"
                        value={usuarioEditando.a_paterno}
                        onChange={(e) =>
                          setUsuarioEditando({
                            ...usuarioEditando,
                            a_paterno: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Apellido Materno"
                        value={usuarioEditando.a_materno}
                        onChange={(e) =>
                          setUsuarioEditando({
                            ...usuarioEditando,
                            a_materno: e.target.value,
                          })
                        }
                      />
                      <input
                        type="email"
                        className="form-control mb-2"
                        placeholder="Correo electrónico"
                        value={usuarioEditando.correo_electronico}
                        onChange={(e) =>
                          setUsuarioEditando({
                            ...usuarioEditando,
                            correo_electronico: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">
                        Guardar Cambios
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setUsuarioEditando(null)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          {mostrarFormularioNuevo && (
            <div
              className="modal fade show"
              style={{
                display: "block",
                backgroundColor: "rgba(0,0,0,0.5)",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1050,
              }}
              tabIndex={-1}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      fetch("http://localhost:8000/api/usuarios", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(nuevoUsuario),
                      })
                        .then((res) => {
                          if (!res.ok)
                            throw new Error("Error al crear usuario");
                          return res.json();
                        })
                        .then((data) => {
                          setUsuarios((prev) => [...prev, data]);
                          setMostrarFormularioNuevo(false);
                          setNuevoUsuario({
                            nombre: "",
                            a_paterno: "",
                            a_materno: "",
                            telefono: "",
                            celular: "",
                            correo_electronico: "",
                            contraseña: "",
                          });
                        })
                        .catch((err) => console.error("Error al crear:", err));
                    }}
                  >
                    <div className="modal-header">
                      <h5 className="modal-title">Nuevo Usuario</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setMostrarFormularioNuevo(false)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      {[
                        "nombre",
                        "a_paterno",
                        "a_materno",
                        "telefono",
                        "celular",
                        "correo_electronico",
                        "contraseña",
                      ].map((campo) => (
                        <input
                          key={campo}
                          type={
                            campo === "correo_electronico" ? "email" : "text"
                          }
                          className="form-control mb-2"
                          placeholder={
                            campo.charAt(0).toUpperCase() + campo.slice(1)
                          }
                          value={(nuevoUsuario as any)[campo]}
                          onChange={(e) =>
                            setNuevoUsuario({
                              ...nuevoUsuario,
                              [campo]: e.target.value,
                            })
                          }
                        />
                      ))}
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">
                        Crear Usuario
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setMostrarFormularioNuevo(false)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Client;
