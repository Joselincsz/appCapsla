function RecuperacionContrasennia() {
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
                        src="/images/logoNv.png"
                        alt="logo"
                        style={{ width: 60, height: 50 }}
                      />{" "}
                      H20-Admin
                    </div>
                    <p className="login-box-msg">
                      Introduzca su CURP y le enviaremos un código de
                      confirmación <br />
                      para la recuperación de la contraseña.
                    </p>
                  </div>
                  <form className="form-sample" id="recuperacionForm">
                    <div className="form-group">
                      <label htmlFor="rcpcurp">CURP</label>
                      <div className="input-group">
                        <input
                          id="rcpcurp"
                          className="form-control w-100"
                          name="rcpcurp"
                          type="text"
                          placeholder="CURP"
                        />
                      </div>
                    </div>

                    {/* Aquí puedes integrar reCAPTCHA manualmente */}
                    <div className="form-group text-center">
                      {/* NoCaptcha::display() -> reemplazar por componente reCAPTCHA */}
                      <div id="recaptcha-container"></div>
                      {/* Mostrar error si es necesario */}
                      {/* <span className="text-danger">Error en reCAPTCHA</span> */}
                    </div>

                    <div className="my-3">
                      <button
                        type="submit"
                        id="enviarFormulario"
                        className="btn btn-block btn-primary btn-sm font-weight-medium auth-form-btn"
                      >
                        Solicitar una nueva contraseña
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

export default RecuperacionContrasennia;
