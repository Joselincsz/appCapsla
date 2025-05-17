import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="page-body-wrapper">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <br></br>
          <li className="nav-item nav-category">Menú Principal</li>

          <li className="nav-item">
            <a className="nav-link" href="../../index.html">
              <span className="icon-bg">
                <i className="mdi mdi-cube menu-icon" />
              </span>
              <span className="menu-title">Panel</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#page-layouts"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="page-layouts"
            >
              <span className="icon-bg">
                <i className="mdi mdi-account-group menu-icon" />
              </span>
              <span className="menu-title">Usuarios</span>
            </a>
          </li>

          <li className="nav-item nav-category">Administración</li>

          <li className="nav-item">
            <a className="nav-link" href="/Client">
              <span className="icon-bg">
                <i className="mdi mdi-account-group menu-icon" />
              </span>
              <span className="menu-title">Clientes</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#clientes"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="clientes"
            >
              <span className="icon-bg">
                <i className="mdi mdi-file-document-box menu-icon" />
              </span>
              <span className="menu-title">Contratos</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="clientes">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="/ContratoRegister">
                    Registrar contratos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contrato">
                    Lista de contratos
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item nav-category">Gestión</li>

          <li className="nav-item">
            <a className="nav-link" href="/Direccion">
              <span className="icon-bg">
                <i className="mdi mdi-map-marker-radius menu-icon" />
              </span>
              <span className="menu-title">Direcciones</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#ui-advanced"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="ui-advanced"
            >
              <span className="icon-bg">
                <i className="mdi mdi-water-pump menu-icon" />
              </span>
              <span className="menu-title">Toma de agua</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-advanced">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="/TomaAgua">
                    Administrar tomas
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/Documentos">
              <span className="icon-bg">
                <i className="mdi mdi-file-document-outline menu-icon" />
              </span>
              <span className="menu-title">Documentos</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="../../pages/ui-features/notifications.html"
            >
              <span className="icon-bg">
                <i className="mdi mdi-cash-multiple menu-icon" />
              </span>
              <span className="menu-title">Pagos y tarifas</span>
            </a>
          </li>

          <li className="nav-item nav-category">Finanzas</li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#finanzas"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="finanzas"
            >
              <span className="icon-bg">
                <i className="mdi mdi-chart-bar-stacked menu-icon" />
              </span>
              <span className="menu-title">Aportaciones y Egresos</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="finanzas">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="/finanzas/aportaciones.html">
                    Aportaciones
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/finanzas/egresos.html">
                    Egresos
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
