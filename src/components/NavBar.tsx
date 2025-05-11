function NavBar() {
  return (
    <div>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="index.html">
            <img src="../public/images/logo2.png" alt="logo" />
            
          </a>
          <a className="navbar-brand brand-logo-mini" href="index.html">
            <img src="../public/images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="mdi mdi-menu" />
          </button>
          <div className="search-field d-none d-xl-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 mdi mdi-magnify" />
                </div>
                <input
                  type="text"
                  className="form-control bg-transparent border-0"
                  placeholder="Buscar..."
                />
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item  dropdown d-none d-md-block">
              <a
                className="nav-link dropdown-toggle"
                id="reportDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                Reporte{" "}
              </a>
              <div
                className="dropdown-menu navbar-dropdown"
                aria-labelledby="reportDropdown"
              >
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-file-pdf mr-2" />
                  PDF{" "}
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-file-excel mr-2" />
                  Excel{" "}
                </a>
              </div>
            </li>
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="profileDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="nav-profile-img">
                  <img src="../assets/images/faces/face28.png" alt="image" />
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">Henry Klein</p>
                </div>
              </a>
              <div
                className="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm"
                aria-labelledby="profileDropdown"
                data-x-placement="bottom-end"
              >
                <div className="p-3 text-center bg-primary">
                  <img
                    className="img-avatar img-avatar48 img-avatar-thumb"
                    src="../assets/images/faces/face28.png"
                  />
                </div>
                <div className="p-2">
                  <h5 className="dropdown-header text-uppercase pl-2 text-dark">
                    Opciones del usuario
                  </h5>
                  <a
                    className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span>Perfil</span>
                    <span className="p-0">
                      <i className="mdi mdi-account-outline ml-1" />
                    </span>
                  </a>
                  <a
                    className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                    href="javascript:void(0)"
                  >
                    <span>Configuración</span>
                    <i className="mdi mdi-settings" />
                  </a>
                  <div role="separator" className="dropdown-divider" />
                  <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2">
                    Acciones
                  </h5>
                  <a
                    className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span>Finalizar la sesión</span>
                    <i className="mdi mdi-logout ml-1" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;



