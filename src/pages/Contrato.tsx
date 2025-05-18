import NavBar from "../components/NavBar";
import MenuIzquierdo from "../components/Sidebar";
import Footer from "../components/Footer";
import TablaContrato from "../components/Tables/ContratoTable/index";

function Contrato() {
  return (
    <div className="container-scroller">
      {/* partial:../../partials/_navbar.html */}
      <br></br>
      <NavBar />
      <br></br>
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
              <h3 className="page-title"> Contratos </h3>
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
            <div>
              <TablaContrato />
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

export default Contrato;
