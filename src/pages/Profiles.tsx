import NavBar from "../components/NavBar";
import MenuIzquiero from "../components/Sidebar";
import Footer from "../components/Footer";

function Profiles() {
  return (
    <div className="container-scroller">
      {/* partial:../../partials/_navbar.html */}
      <NavBar />
      <br></br> <br></br>
      {/* partial */}
      <div className="container-fluid page-body-wrapper">
        {/* partial:../../partials/_settings-panel.html */}

        {/* partial */}
        {/* partial:../../partials/_sidebar.html */}
        <MenuIzquiero />
        {/* partial */}
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title"> Perfil de usuarios </h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Tables</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Data table
                  </li>
                </ol>
              </nav>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Data table</h4>
                <div className="row">
                  <div className="col-12">
                    <table id="order-listing" className="table table-striped">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nombre completo</th>
                          <th>Telefono</th>
                          <th>Celular</th>
                          <th>Correo electronico</th>
                          <th>Estado</th>
                          <th>Usuario</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <th>Joselin Cortes Sanchez</th>
                          <th>2481551010</th>
                          <th>2481151311</th>
                          <th>joselin.cortess01@gmial.com</th>
                          <td>
                            <label className="badge badge-danger">
                              Pendiente
                            </label>
                          </td>
                          <th>joselin123</th>
                          <td>
                            <button className="btn btn-sm edit">✏️</button>
                            <button className="btn btn-sm delete">🗑️</button>
                          </td>
                        </tr>

                        <tr>
                          <th>2</th>
                          <th>Esther Dominghez</th>
                          <th>2481551010</th>
                          <th>2481151311</th>
                          <th>Esther.domiguez01@gmial.com</th>
                          <td>
                            <label className="badge badge-success">
                              Comite
                            </label>
                          </td>
                          <th>esther123</th>
                          <td>
                            <button className="btn btn-sm edit">✏️</button>
                            <button className="btn btn-sm delete">🗑️</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
          {/* partial:../../partials/_footer.html */}
          <Footer />
          {/* partial */}
        </div>
        {/* main-panel ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
}

export default Profiles;
