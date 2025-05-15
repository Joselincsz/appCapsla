function RegistrarUsuario() {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
          <div className="row flex-grow">
            <div className="col-lg-8 d-flex align-items-center justify-content-center">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center font-weight-light">
                      <h4>Registro</h4>
                      <br />
                    </div>
                    <form className="form-sample">
                      <h4>Información personal</h4>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Nombre
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Nombre"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Apellido Paterno
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Apellido Paterno"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Apellido Materno
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Apellido Materno"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              CURP
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="CURP"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Teléfono
                            </label>
                            <div className="col-sm-9">
                              <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                  <span className="input-group-text bg-transparent border-right-0">
                                    <i className="mdi mdi-phone text-primary" />
                                  </span>
                                </div>
                                <input
                                  className="form-control form-control-lg border-left-0"
                                  type="text"
                                  placeholder="Teléfono"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Celular
                            </label>
                            <div className="col-sm-9">
                              <div className="input-group">
                                <div className="input-group-prepend bg-transparent">
                                  <span className="input-group-text bg-transparent border-right-0">
                                    <i className="mdi mdi-cellphone text-primary" />
                                  </span>
                                </div>
                                <input
                                  className="form-control form-control-lg border-left-0"
                                  type="text"
                                  placeholder="Celular"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h4>Información de la cuenta</h4>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Nombre de Usuario
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Nombre de Usuario"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Correo
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                type="email"
                                placeholder="Correo"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Contraseña
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                type="password"
                                placeholder="Contraseña"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">
                              Confirmar Contraseña
                            </label>
                            <div className="col-sm-9">
                              <input
                                className="form-control"
                                type="password"
                                placeholder="Confirmar Contraseña"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-4 mx-auto">
                          <button
                            type="submit"
                            className="btn btn-block btn-primary btn-sm font-weight-medium auth-form-btn"
                          >
                            Registrar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 register-half-bg d-flex flex-row">
              <p className="text-white font-weight-medium text-center flex-grow align-self-end mt-3">
                ¿Ya tienes una cuenta?
                <a href="/autenticacion" className="text-primary mt-2">
                  Iniciar sesión
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrarUsuario;
