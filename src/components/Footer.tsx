function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-inner-wraper">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            {/* Copyright */}
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2025{" "}
              <a
                href="https://www.ejemplo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                H20-ADMIN
              </a>
              . Todos los derechos reservados.
            </span>

            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Desarrollado por <a href="https://www.ejemplo.com"> H20-ADMIN</a>
              <i className="mdi mdi-water" style={{ color: "#00bcd4" }} />
            </span>

            <span className="text-muted">Versión 1.0.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;


