import NavBar from "../components/NavBar";
import MenuIzquierdo from "../components/Sidebar";
import Footer from "../components/Footer";
import TablaUsuarios from "../components/Tables/UserTable";

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
        <MenuIzquierdo />
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
                   <TablaUsuarios/> 
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
