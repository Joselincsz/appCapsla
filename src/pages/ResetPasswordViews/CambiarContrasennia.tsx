function CambiarContrasennia() {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
          <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <div className="card">
              <div className="card-body">
                <div className="text-center font-weight-light">
                  <div className="brand-logo">
                    <img
                      src="../images/logoNv.png"
                      alt="logo"
                      style={{ width: 60, height: 50 }}
                    />{" "}
                    H20-Admin
                  </div>
                  <p className="login-box-msg">
                    Estás a solo un paso de tu nueva contraseña, recupera <br />{" "}
                    tu contraseña ahora.
                  </p>
                </div>
                <form className="form-sample" id="recuperacionForm">
                  {/* Puedes manejar el token desde props, estado o ruta */}
                  <input type="hidden" name="mytoken" value={"token_aqui"} />

                  <div className="form-group">
                    <label htmlFor="contrasennia">Nueva contraseña</label>
                    <div className="input-group">
                      <input
                        id="contrasennia"
                        className="form-control w-100"
                        name="contrasennia"
                        type="password"
                        placeholder="Nueva Contraseña"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmpass">Confirmar tu contraseña</label>
                    <div className="input-group">
                      <input
                        id="confirmpass"
                        className="form-control w-100"
                        name="confirmpass"
                        type="password"
                        placeholder="Confirmar tu contraseña"
                      />
                    </div>
                  </div>

                  <div className="my-3">
                    <button
                      type="submit"
                      id="enviarFormulario"
                      className="btn btn-block btn-primary btn-sm font-weight-medium auth-form-btn"
                    >
                      Cambiar Contraseña
                    </button>
                  </div>

                  <div className="text-center mt-4 font-weight-light">
                    <a className="text-primary" href="/login">
                      Iniciar sesión
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
}

export default CambiarContrasennia;
