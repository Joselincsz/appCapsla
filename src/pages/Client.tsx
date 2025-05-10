import NavBar from "../components/NavBar";
import MenuIzquiero from "../components/Sidebar";
import Footer from "../components/Footer";

function Client() {
  return (
    <div className="container-scroller">
      {/* partial:../../partials/_navbar.html */}
      <NavBar /> <br></br>
      <br></br>
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
              <h3 className="page-title"> Data table </h3>
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
                    <table id="order-listing" className="table">
                      <thead>
                        <tr>
                          <th>Order #</th>
                          <th>Purchased On</th>
                          <th>Customer</th>
                          <th>Ship to</th>
                          <th>Base Price</th>
                          <th>Purchased Price</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>2012/08/03</td>
                          <td>Edinburgh</td>
                          <td>New York</td>
                          <td>$1500</td>
                          <td>$3200</td>
                          <td>
                            <label className="badge badge-info">On hold</label>
                          </td>
                          <td>
                            <button className="btn btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>2015/04/01</td>
                          <td>Doe</td>
                          <td>Brazil</td>
                          <td>$4500</td>
                          <td>$7500</td>
                          <td>
                            <label className="badge badge-danger">
                              Pending
                            </label>
                          </td>
                          <td>
                            <button className="btn btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>2010/11/21</td>
                          <td>Sam</td>
                          <td>Tokyo</td>
                          <td>$2100</td>
                          <td>$6300</td>
                          <td>
                            <label className="badge badge-success">
                              Closed
                            </label>
                          </td>
                          <td>
                            <button className="btn btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>2016/01/12</td>
                          <td>Sam</td>
                          <td>Tokyo</td>
                          <td>$2100</td>
                          <td>$6300</td>
                          <td>
                            <label className="badge badge-success">
                              Closed
                            </label>
                          </td>
                          <td>
                            <button className="btn btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>2017/12/28</td>
                          <td>Sam</td>
                          <td>Tokyo</td>
                          <td>$2100</td>
                          <td>$6300</td>
                          <td>
                            <label className="badge badge-success">
                              Closed
                            </label>
                          </td>
                          <td>
                            <button className="btn btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>2000/10/30</td>
                          <td>Sam</td>
                          <td>Tokyo</td>
                          <td>$2100</td>
                          <td>$6300</td>
                          <td>
                            <label className="badge badge-info">On-hold</label>
                          </td>
                          <td>
                            <button className="btn btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>2011/03/11</td>
                          <td>Cris</td>
                          <td>Tokyo</td>
                          <td>$2100</td>
                          <td>$6300</td>
                          <td>
                            <label className="badge badge-success">
                              Closed
                            </label>
                          </td>
                          <td>
                            <button className="btn btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>2015/06/25</td>
                          <td>Tim</td>
                          <td>Italy</td>
                          <td>$6300</td>
                          <td>$2100</td>
                          <td>
                            <label className="badge badge-info">On-hold</label>
                          </td>
                          <td>
                            <button className="btn btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>2016/11/12</td>
                          <td>John</td>
                          <td>Tokyo</td>
                          <td>$2100</td>
                          <td>$6300</td>
                          <td>
                            <label className="badge badge-success">
                              Closed
                            </label>
                          </td>
                          <td>
                            <button className="btn btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>2003/12/26</td>
                          <td>Tom</td>
                          <td>Germany</td>
                          <td>$1100</td>
                          <td>$2300</td>
                          <td>
                            <label className="badge badge-danger">
                              Pending
                            </label>
                          </td>
                          <td>
                            <button className="btn btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
           
            <div className="row">
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Bordered table</h4>
                    <p className="card-description">
                      {" "}
                      Add class <code>.table-bordered</code>
                    </p>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nombre de perfil</th>
                          <th>CURP</th>
                          <th>Correo electrónico</th>
                          <th>Estado</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>perfil1</td>
                          <td>RACW050729MMC...A2</td>
                          <td>usuario01@gmail.com</td>
                          <td>
                            <span className="estado inactivo">Inactivo</span>
                          </td>
                          <td>
                            <button className="btn btn-sm edit">✏️</button>
                            <button className="btn btn-sm delete">🗑️</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>perfil2</td>
                          <td>RACW050729MMC...A2</td>
                          <td>usuario02@gmail.com</td>
                          <td>
                            <span className="estado activo">Activo</span>
                          </td>
                          <td>
                            <button className="btn btn-sm edit">✏️</button>
                            <button className="btn btn-sm delete">🗑️</button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>perfil3</td>
                          <td>RACW050729MMC...A2</td>
                          <td>usuario03@gmail.com</td>
                          <td>
                            <span className="estado inactivo">Inactivo</span>
                          </td>
                          <td>
                            <button className="btn btn-sm edit">✏️</button>
                            <button className="btn btn-sm delete">🗑️</button>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>perfil4</td>
                          <td>RACW050729MMC...A2</td>
                          <td>usuario04@gmail.com</td>
                          <td>
                            <span className="estado activo">Activo</span>
                          </td>
                          <td>
                            <button className="btn btn-sm edit">✏️</button>
                            <button className="btn btn-sm delete">🗑️</button>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>perfil5</td>
                          <td>RACW050729MMC...A2</td>
                          <td>usuario05@gmail.com</td>
                          <td>
                            <span className="estado inactivo">Inactivo</span>
                          </td>
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
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Inverse table</h4>
                    <p className="card-description">
                      {" "}
                      Add class <code>.table-dark</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      Table with contextual classes
                    </h4>
                    <p className="card-description">
                      {" "}
                      Add class{" "}
                      <code>
                        .table-{"{"}color{"}"}
                      </code>
                    </p>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th> # </th>
                          <th> First name </th>
                          <th> Product </th>
                          <th> Amount </th>
                          <th> Deadline </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-info">
                          <td> 1 </td>
                          <td> Herman Beck </td>
                          <td> Photoshop </td>
                          <td> $ 77.99 </td>
                          <td> May 15, 2015 </td>
                        </tr>
                        <tr className="table-warning">
                          <td> 2 </td>
                          <td> Messsy Adam </td>
                          <td> Flash </td>
                          <td> $245.30 </td>
                          <td> July 1, 2015 </td>
                        </tr>
                        <tr className="table-danger">
                          <td> 3 </td>
                          <td> John Richards </td>
                          <td> Premeire </td>
                          <td> $138.00 </td>
                          <td> Apr 12, 2015 </td>
                        </tr>
                        <tr className="table-success">
                          <td> 4 </td>
                          <td> Peter Meggik </td>
                          <td> After effects </td>
                          <td> $ 77.99 </td>
                          <td> May 15, 2015 </td>
                        </tr>
                        <tr className="table-primary">
                          <td> 5 </td>
                          <td> Edward </td>
                          <td> Illustrator </td>
                          <td> $ 160.25 </td>
                          <td> May 03, 2015 </td>
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

export default Client;
