function Autenticacion() {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
          <div className="row flex-grow">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="auth-form-transparent text-left p-3">
                <div className="brand-logo">
                  <img
                    src="../images/logoNv.png"
                    alt="logo"
                    style={{ width: 60, height: 50 }}
                  />{" "}
                  Bienvenido a H20-Admin
                </div>
                <h4>Autenticación</h4>
                <form
                  className="form-sample"
                  id="loginForm"
                  method="post"
                  action="{{route('autenticacion.post')}}"
                >
                  <div className="form-group">
                    <label htmlFor="correo">Correo electrónico</label>
                    <div className="input-group">
                      <input
                        id="correo"
                        className="form-control w-100"
                        name="correo"
                        type="email"
                        placeholder="Correo"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contraseña">Contraseña</label>
                    <div className="input-group">
                      <input
                        id="contraseña"
                        className="form-control w-100"
                        name="contraseña"
                        type="password"
                        placeholder="Contraseña"
                      />
                    </div>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <a
                      className="text-center font-weight-light"
                      href='{{route("password.request")}}'
                    >
                      ¿Has olvidado tu contraseña?
                    </a>
                  </div>
                  <div className="my-3">
                    <button
                      type="submit"
                      id="enviarFormulario"
                      className="btn btn-block btn-primary btn-sm font-weight-medium auth-form-btn"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    {" "}
                    ¿No tienes una cuenta?{" "}
                    <a
                      href='{{route("register.create")}}'
                      className="text-primary"
                    >
                      Crear
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 login-half-bg d-flex flex-row">
              {/*<p class="text-white font-weight-medium text-center flex-grow align-self-end">
          ¿No tienes una cuenta?
          <a href="registrarusuario.blade.php" class="text-primary mt-2">Crear cuenta</a>
        </p>*/}
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
}
export default Autenticacion;
