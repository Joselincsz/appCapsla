import React, { useState } from "react";
import NavBar from "../components/NavBar";
import MenuIzquierdo from "../components/Sidebar";
import Footer from "../components/Footer";

function Profiles() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Joselin Cortes Sanchez",
      phone: "2481551010",
      mobile: "2481151311",
      email: "joselin.cortess01@gmial.com",
      status: "Pendiente",
      username: "joselin123",
    },
    {
      id: 2,
      name: "Esther Dominguez",
      phone: "2481551010",
      mobile: "2481151311",
      email: "Esther.domiguez01@gmial.com",
      status: "Comite",
      username: "esther123",
    },
  ]);

 const handleEdit = (userId) => {
    // Lógica para editar
    console.log(`Editar usuario con ID: ${userId}`);
  };

  const handleDelete = (userId) => {
     //Lógica para eliminar
    setUsers(users.filter((user) => user.id !== userId));
    console.log(`Eliminar usuario con ID: ${userId}`);
  };

  return (
    <div className="container-scroller">
      <NavBar />
      <br />
      <div className="container-fluid page-body-wrapper">
        <MenuIzquierdo />
        <div className="main-panel">
          <div className="content-wrapper">
            <header className="page-header">
              <h3 className="page-title">Perfil de usuarios</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Tablas</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Tabla de datos
                  </li>
                </ol>
              </nav>
            </header>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Tabla de datos</h4>
                <table id="order-listing" className="table table-striped">
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
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.mobile}</td>
                        <td>{user.email}</td>
                        <td>
                          <label
                            className={`badge badge-${
                              user.status === "Pendiente" ? "danger" : "success"
                            }`}
                          >
                            {user.status}
                          </label>
                        </td>
                        <td>{user.username}</td>
                        <td>
                          <button
                            className="btn btn-sm edit"
                            //onClick={() => handleEdit(user.id)}
                          >
                            ✏️
                          </button>
                          <button
                            className="btn btn-sm delete"
                            //onClick={() => handleDelete(user.id)}
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Profiles;
