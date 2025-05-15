function Ejemplo() {
  return (
    <div className="container-scroller">
      {/* partial:partials/_navbar.html */}
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo" href="index.html">
            <img src="../assets/images/logo.svg" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="index.html">
            <img src="../assets/images/logo-mini.svg" alt="logo" />
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
                  placeholder="Search products"
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
                Reports{" "}
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
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-file-word mr-2" />
                  doc{" "}
                </a>
              </div>
            </li>
            <li className="nav-item  dropdown d-none d-md-block">
              <a
                className="nav-link dropdown-toggle"
                id="projectDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {" "}
                Projects{" "}
              </a>
              <div
                className="dropdown-menu navbar-dropdown"
                aria-labelledby="projectDropdown"
              >
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-eye-outline mr-2" />
                  View Project{" "}
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="mdi mdi-pencil-outline mr-2" />
                  Edit Project{" "}
                </a>
              </div>
            </li>
            <li className="nav-item nav-language dropdown d-none d-md-block">
              <a
                className="nav-link dropdown-toggle"
                id="languageDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="nav-language-icon">
                  <i className="flag-icon flag-icon-us" title="us" id="us" />
                </div>
                <div className="nav-language-text">
                  <p className="mb-1 text-black">English</p>
                </div>
              </a>
              <div
                className="dropdown-menu navbar-dropdown"
                aria-labelledby="languageDropdown"
              >
                <a className="dropdown-item" href="#">
                  <div className="nav-language-icon mr-2">
                    <i className="flag-icon flag-icon-ae" title="ae" id="ae" />
                  </div>
                  <div className="nav-language-text">
                    <p className="mb-1 text-black">Arabic</p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <div className="nav-language-icon mr-2">
                    <i className="flag-icon flag-icon-gb" title="GB" id="gb" />
                  </div>
                  <div className="nav-language-text">
                    <p className="mb-1 text-black">English</p>
                  </div>
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
                    alt
                  />
                </div>
                <div className="p-2">
                  <h5 className="dropdown-header text-uppercase pl-2 text-dark">
                    User Options
                  </h5>
                  <a
                    className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span>Inbox</span>
                    <span className="p-0">
                      <span className="badge badge-primary">3</span>
                      <i className="mdi mdi-email-open-outline ml-1" />
                    </span>
                  </a>
                  <a
                    className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span>Profile</span>
                    <span className="p-0">
                      <span className="badge badge-success">1</span>
                      <i className="mdi mdi-account-outline ml-1" />
                    </span>
                  </a>
                  <a
                    className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                    href="javascript:void(0)"
                  >
                    <span>Settings</span>
                    <i className="mdi mdi-settings" />
                  </a>
                  <div role="separator" className="dropdown-divider" />
                  <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2">
                    Actions
                  </h5>
                  <a
                    className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span>Lock Account</span>
                    <i className="mdi mdi-lock ml-1" />
                  </a>
                  <a
                    className="dropdown-item py-1 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    <span>Log Out</span>
                    <i className="mdi mdi-logout ml-1" />
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-email-outline" />
                <span className="count-symbol bg-success" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="messageDropdown"
              >
                <h6 className="p-3 mb-0 bg-primary text-white py-4">
                  Messages
                </h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../assets/images/faces/face4.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      Mark send you a message
                    </h6>
                    <p className="text-gray mb-0"> 1 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../assets/images/faces/face2.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      Cregh send you a message
                    </h6>
                    <p className="text-gray mb-0"> 15 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src="../assets/images/faces/face3.jpg"
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">
                      Profile picture updated
                    </h6>
                    <p className="text-gray mb-0"> 18 Minutes ago </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <h6 className="p-3 mb-0 text-center">4 new messages</h6>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-bell-outline" />
                <span className="count-symbol bg-danger" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <h6 className="p-3 mb-0 bg-primary text-white py-4">
                  Notifications
                </h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="mdi mdi-calendar" />
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">
                      Event today
                    </h6>
                    <p className="text-gray ellipsis mb-0">
                      {" "}
                      Just a reminder that you have an event today{" "}
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="mdi mdi-settings" />
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">
                      Settings
                    </h6>
                    <p className="text-gray ellipsis mb-0">
                      {" "}
                      Update dashboard{" "}
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="mdi mdi-link-variant" />
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">
                      Launch Admin
                    </h6>
                    <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                  </div>
                </a>
                <div className="dropdown-divider" />
                <h6 className="p-3 mb-0 text-center">See all notifications</h6>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu" />
          </button>
        </div>
      </nav>
      {/* partial */}
      <div className="container-fluid page-body-wrapper">
        {/* partial:partials/_settings-panel.html */}
        <div id="settings-trigger">
          <i className="mdi mdi-settings" />
        </div>
        <div id="theme-settings" className="settings-panel">
          <i className="settings-close mdi mdi-close" />
          <p className="settings-heading">SIDEBAR SKINS</p>
          <div
            className="sidebar-bg-options selected"
            id="sidebar-default-theme"
          >
            <div className="img-ss rounded-circle bg-dark border mr-3" />
            Default
          </div>
          <div className="sidebar-bg-options" id="sidebar-dark-theme">
            <div className="img-ss rounded-circle bg-light border mr-3" />
            Light
          </div>
          <p className="settings-heading mt-2">HEADER SKINS</p>
          <div className="color-tiles mx-0 px-4">
            <div className="tiles primary" />
            <div className="tiles success" />
            <div className="tiles warning" />
            <div className="tiles danger" />
            <div className="tiles info" />
            <div className="tiles dark" />
            <div className="tiles default light" />
          </div>
        </div>
        {/* partial */}
        {/* partial:partials/_sidebar.html */}
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-category">Main</li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <span className="icon-bg">
                  <i className="mdi mdi-cube menu-icon" />
                </span>
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#page-layouts"
                aria-expanded="false"
                aria-controls="page-layouts"
              >
                <span className="icon-bg">
                  {" "}
                  <i className="mdi mdi-apps menu-icon" />{" "}
                </span>
                <span className="menu-title">Page Layouts</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="page-layouts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/layout/boxed-layout.html"
                    >
                      Boxed
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/layout/rtl-layout.html">
                      RTL
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#sidebar-layouts"
                aria-expanded="false"
                aria-controls="sidebar-layouts"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-playlist-play menu-icon" />
                </span>
                <span className="menu-title">Sidebar Layouts</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebar-layouts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/layout/compact-menu.html"
                    >
                      Compact menu
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/layout/sidebar-collapsed.html"
                    >
                      Icon menu
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/layout/sidebar-hidden.html"
                    >
                      Sidebar Hidden
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/layout/sidebar-hidden-overlay.html"
                    >
                      Sidebar Overlay
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/layout/sidebar-fixed.html"
                    >
                      Sidebar Fixed
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/samples/widgets.html">
                <span className="icon-bg">
                  <i className="mdi mdi-widgets menu-icon" />
                </span>
                <span className="menu-title">Widgets</span>
              </a>
            </li>
            <li className="nav-item nav-category">UI Features</li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#ui-basic"
                aria-expanded="false"
                aria-controls="ui-basic"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-crosshairs-gps menu-icon" />
                </span>
                <span className="menu-title">Basic UI Elements</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/accordions.html"
                    >
                      Accordions
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/buttons.html"
                    >
                      Buttons
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/badges.html"
                    >
                      Badges
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/breadcrumbs.html"
                    >
                      Breadcrumbs
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/dropdowns.html"
                    >
                      Dropdowns
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/modals.html"
                    >
                      Modals
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/progress.html"
                    >
                      Progress bar
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/pagination.html"
                    >
                      Pagination
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/ui-features/tabs.html">
                      Tabs
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/typography.html"
                    >
                      Typography
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/tooltips.html"
                    >
                      Tooltip
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#ui-advanced"
                aria-expanded="false"
                aria-controls="ui-advanced"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-cards-variant menu-icon" />
                </span>
                <span className="menu-title">Advanced UI</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="ui-advanced">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/dragula.html"
                    >
                      Dragula
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/clipboard.html"
                    >
                      Clipboard
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/context-menu.html"
                    >
                      Context menu
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/slider.html"
                    >
                      Slider
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/colcade.html"
                    >
                      Colcade
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/carousel.html"
                    >
                      Carousel
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/loaders.html"
                    >
                      Loaders
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/treeview.html"
                    >
                      Tree View
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/ui-features/popups.html">
                <span className="icon-bg">
                  <i className="mdi mdi-forum menu-icon" />
                </span>
                <span className="menu-title">Popups</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="pages/ui-features/notifications.html"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-bell-ring menu-icon" />
                </span>
                <span className="menu-title">Notifications</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#icons"
                aria-expanded="false"
                aria-controls="icons"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-contacts menu-icon" />
                </span>
                <span className="menu-title">Icons</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/icons/mdi.html">
                      Material
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/icons/flag-icons.html">
                      Flag icons
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/icons/font-awesome.html"
                    >
                      Font Awesome
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/icons/simple-line-icon.html"
                    >
                      Simple line icons
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/icons/themify.html">
                      Themify icons
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#forms"
                aria-expanded="false"
                aria-controls="forms"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-format-list-bulleted menu-icon" />
                </span>
                <span className="menu-title">Forms</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="forms">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/forms/basic_elements.html"
                    >
                      Form Elements
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/forms/advanced_elements.html"
                    >
                      Advanced Forms
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/forms/validation.html">
                      Validation
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/forms/wizard.html">
                      Wizard
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item nav-category">Editors</li>
            <li className="nav-item">
              <a className="nav-link" href="pages/forms/text_editor.html">
                <span className="icon-bg">
                  <i className="mdi mdi-file-document menu-icon" />
                </span>
                <span className="menu-title">Text editors</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/forms/code_editor.html">
                <span className="icon-bg">
                  <i className="mdi mdi-code-not-equal-variant menu-icon" />
                </span>
                <span className="menu-title">Code editors</span>
              </a>
            </li>
            <li className="nav-item nav-category">Data Representation</li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#charts"
                aria-expanded="false"
                aria-controls="charts"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-chart-bar menu-icon" />
                </span>
                <span className="menu-title">Charts</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="charts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/charts/chartjs.html">
                      ChartJs
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/charts/morris.html">
                      Morris
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/charts/flot-chart.html">
                      Flot
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/charts/google-charts.html"
                    >
                      Google charts
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/charts/sparkline.html">
                      Sparkline js
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/charts/c3.html">
                      C3 charts
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/charts/chartist.html">
                      Chartist
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/charts/justGage.html">
                      JustGage
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#tables"
                aria-expanded="false"
                aria-controls="tables"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-table-large menu-icon" />
                </span>
                <span className="menu-title">Tables</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="tables">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/tables/basic-table.html"
                    >
                      Basic table
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/tables/data-table.html">
                      Data table
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/tables/js-grid.html">
                      Js-grid
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/tables/sortable-table.html"
                    >
                      Sortable table
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#maps"
                aria-expanded="false"
                aria-controls="maps"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-map-marker-radius menu-icon" />
                </span>
                <span className="menu-title">Maps</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="maps">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/maps/google-maps.html">
                      Google Maps
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/maps/mapael.html">
                      Mapael
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/maps/vector-map.html">
                      Vector map
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item nav-category">Sample Pages</li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-lock menu-icon" />
                </span>
                <span className="menu-title">User Pages</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/login.html">
                      {" "}
                      Login{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/login-2.html">
                      {" "}
                      Login 2{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/mutli-level-login.html"
                    >
                      {" "}
                      Multi step login{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/register.html">
                      {" "}
                      Register{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/register-2.html"
                    >
                      {" "}
                      Register 2{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/lock-screen.html"
                    >
                      {" "}
                      Lockscreen{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#error"
                aria-expanded="false"
                aria-controls="error"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-security menu-icon" />
                </span>
                <span className="menu-title">Error pages</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="error">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/error-404.html">
                      {" "}
                      404{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/error-500.html">
                      {" "}
                      500{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#general-pages"
                aria-expanded="false"
                aria-controls="general-pages"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-medical-bag menu-icon" />
                </span>
                <span className="menu-title">General Pages</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="general-pages">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/blank-page.html"
                    >
                      {" "}
                      Blank Page{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/profile.html">
                      {" "}
                      Profile{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/faq.html">
                      {" "}
                      FAQ{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/faq-2.html">
                      {" "}
                      FAQ 2{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/news-grid.html">
                      {" "}
                      News grid{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/timeline.html">
                      {" "}
                      Timeline{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/user-listing.html"
                    >
                      {" "}
                      User listing{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/portfolio.html">
                      {" "}
                      Portfolio{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item nav-category">Applications</li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#e-commerce"
                aria-expanded="false"
                aria-controls="e-commerce"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-shopping menu-icon" />
                </span>
                <span className="menu-title">E-commerce</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="e-commerce">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/invoice.html">
                      {" "}
                      Invoice{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/pricing-table.html"
                    >
                      {" "}
                      Pricing Table{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/orders.html">
                      {" "}
                      Orders{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/emailer.html">
                      {" "}
                      Email template{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/product-catalogue.html"
                    >
                      {" "}
                      Product catalogue{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/samples/project-list.html"
                    >
                      {" "}
                      project list{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/apps/kanban-board.html">
                <span className="icon-bg">
                  <i className="mdi mdi-tablet-dashboard menu-icon" />
                </span>
                <span className="menu-title">Kanban Board</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/apps/email.html">
                <span className="icon-bg">
                  <i className="mdi mdi-email menu-icon" />
                </span>
                <span className="menu-title">E-mail</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/apps/calendar.html">
                <span className="icon-bg">
                  <i className="mdi mdi-calendar-today menu-icon" />
                </span>
                <span className="menu-title">Calendar</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/apps/todo.html">
                <span className="icon-bg">
                  <i className="mdi mdi-playlist-edit menu-icon" />
                </span>
                <span className="menu-title">Todo list</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/apps/tickets.html">
                <span className="icon-bg">
                  <i className="mdi mdi-ticket menu-icon" />
                </span>
                <span className="menu-title">Tickets</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/apps/chat.html">
                <span className="icon-bg">
                  <i className="mdi mdi-chat menu-icon" />
                </span>
                <span className="menu-title">Chat</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/apps/gallery.html">
                <span className="icon-bg">
                  <i className="mdi mdi-image-filter-frames menu-icon" />
                </span>
                <span className="menu-title">Gallery</span>
              </a>
            </li>
            <li className="nav-item documentation-link">
              <a
                className="nav-link"
                href="http://www.bootstrapdash.com/demo/connect-plus/jquery/documentation/documentation.html"
              >
                <span className="icon-bg">
                  <i className="mdi mdi-file-document-box menu-icon" />
                </span>
                <span className="menu-title">Documentation</span>
              </a>
            </li>
            <li className="nav-item sidebar-user-actions">
              <div className="user-details">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center">
                      <div className="sidebar-profile-img">
                        <img
                          src="../assets/images/faces/face28.png"
                          alt="image"
                        />
                      </div>
                      <div className="sidebar-profile-text">
                        <p className="mb-1">Henry Klein</p>
                      </div>
                    </div>
                  </div>
                  <div className="badge badge-danger">3</div>
                </div>
              </div>
            </li>
            <li className="nav-item sidebar-user-actions">
              <div className="sidebar-user-menu">
                <a href="#" className="nav-link">
                  <i className="mdi mdi-settings menu-icon" />
                  <span className="menu-title">Settings</span>
                </a>
              </div>
            </li>
            <li className="nav-item sidebar-user-actions">
              <div className="sidebar-user-menu">
                <a href="#" className="nav-link">
                  <i className="mdi mdi-speedometer menu-icon" />
                  <span className="menu-title">Take Tour</span>
                </a>
              </div>
            </li>
            <li className="nav-item sidebar-user-actions">
              <div className="sidebar-user-menu">
                <a href="#" className="nav-link">
                  <i className="mdi mdi-logout menu-icon" />
                  <span className="menu-title">Log Out</span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
        {/* partial */}
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="d-xl-flex justify-content-between align-items-start">
              <h2 className="text-dark font-weight-bold mb-2">
                {" "}
                Overview dashboard{" "}
              </h2>
              <div className="d-sm-flex justify-content-xl-between align-items-center mb-2">
                <div
                  className="btn-group bg-white p-3"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-link text-light py-0 border-right"
                  >
                    7 Days
                  </button>
                  <button
                    type="button"
                    className="btn btn-link text-dark py-0 border-right"
                  >
                    1 Month
                  </button>
                  <button
                    type="button"
                    className="btn btn-link text-light py-0"
                  >
                    3 Month
                  </button>
                </div>
                <div className="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                  <button
                    className="btn bg-white dropdown-toggle p-3 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="mdi mdi-calendar mr-1" />
                    24 Mar 2019 - 24 Mar 2019{" "}
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="d-sm-flex justify-content-between align-items-center transaparent-tab-border {">
                  <ul className="nav nav-tabs tab-transparent" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="home-tab"
                        data-toggle="tab"
                        href="#"
                        role="tab"
                        aria-selected="true"
                      >
                        Users
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="business-tab"
                        data-toggle="tab"
                        href="#business-1"
                        role="tab"
                        aria-selected="false"
                      >
                        Business
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="performance-tab"
                        data-toggle="tab"
                        href="#"
                        role="tab"
                        aria-selected="false"
                      >
                        Performance
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="conversion-tab"
                        data-toggle="tab"
                        href="#"
                        role="tab"
                        aria-selected="false"
                      >
                        Conversion
                      </a>
                    </li>
                  </ul>
                  <div className="d-md-block d-none">
                    <a href="#" className="text-light p-1">
                      <i className="mdi mdi-view-dashboard" />
                    </a>
                    <a href="#" className="text-light p-1">
                      <i className="mdi mdi-dots-vertical" />
                    </a>
                  </div>
                </div>
                <div className="tab-content tab-transparent-content">
                  <div
                    className="tab-pane fade show active"
                    id="business-1"
                    role="tabpanel"
                    aria-labelledby="business-tab"
                  >
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">
                              Orders
                            </h5>
                            <h2 className="mb-4 text-dark font-weight-bold">
                              932.00
                            </h2>
                            <div className="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
                              <i className="mdi mdi-lightbulb icon-md absolute-center text-dark" />
                            </div>
                            <p className="mt-4 mb-0">Completed</p>
                            <h3 className="mb-0 font-weight-bold mt-2 text-dark">
                              5443
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">
                              Unique Visitors
                            </h5>
                            <h2 className="mb-4 text-dark font-weight-bold">
                              756,00
                            </h2>
                            <div className="dashboard-progress dashboard-progress-2 d-flex align-items-center justify-content-center item-parent">
                              <i className="mdi mdi-account-circle icon-md absolute-center text-dark" />
                            </div>
                            <p className="mt-4 mb-0">
                              Increased since yesterday
                            </p>
                            <h3 className="mb-0 font-weight-bold mt-2 text-dark">
                              50%
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">
                              Impressions
                            </h5>
                            <h2 className="mb-4 text-dark font-weight-bold">
                              100,38
                            </h2>
                            <div className="dashboard-progress dashboard-progress-3 d-flex align-items-center justify-content-center item-parent">
                              <i className="mdi mdi-eye icon-md absolute-center text-dark" />
                            </div>
                            <p className="mt-4 mb-0">
                              Increased since yesterday
                            </p>
                            <h3 className="mb-0 font-weight-bold mt-2 text-dark">
                              35%
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body text-center">
                            <h5 className="mb-2 text-dark font-weight-normal">
                              Followers
                            </h5>
                            <h2 className="mb-4 text-dark font-weight-bold">
                              4250k
                            </h2>
                            <div className="dashboard-progress dashboard-progress-4 d-flex align-items-center justify-content-center item-parent">
                              <i className="mdi mdi-cube icon-md absolute-center text-dark" />
                            </div>
                            <p className="mt-4 mb-0">
                              Decreased since yesterday
                            </p>
                            <h3 className="mb-0 font-weight-bold mt-2 text-dark">
                              25%
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 grid-margin">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                  <h4 className="card-title mb-0">
                                    Recent Activity
                                  </h4>
                                  <div className="dropdown dropdown-arrow-none">
                                    <button
                                      className="btn p-0 text-dark dropdown-toggle"
                                      type="button"
                                      id="dropdownMenuIconButton1"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i className="mdi mdi-dots-vertical" />
                                    </button>
                                    <div
                                      className="dropdown-menu dropdown-menu-right"
                                      aria-labelledby="dropdownMenuIconButton1"
                                    >
                                      <h6 className="dropdown-header">
                                        Settings
                                      </h6>
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                      <div className="dropdown-divider" />
                                      <a className="dropdown-item" href="#">
                                        Separated link
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-sm-4 grid-margin  grid-margin-lg-0">
                                <div className="wrapper pb-5 border-bottom">
                                  <div className="text-wrapper d-flex align-items-center justify-content-between mb-2">
                                    <p className="mb-0 text-dark">
                                      Total Profit
                                    </p>
                                    <span className="text-success">
                                      <i className="mdi mdi-arrow-up" />
                                      2.95%
                                    </span>
                                  </div>
                                  <h3 className="mb-0 text-dark font-weight-bold">
                                    $ 92556
                                  </h3>
                                  <canvas id="total-profit" />
                                </div>
                                <div className="wrapper pt-5">
                                  <div className="text-wrapper d-flex align-items-center justify-content-between mb-2">
                                    <p className="mb-0 text-dark">Expenses</p>
                                    <span className="text-success">
                                      <i className="mdi mdi-arrow-up" />
                                      52.95%
                                    </span>
                                  </div>
                                  <h3 className="mb-4 text-dark font-weight-bold">
                                    $ 59565
                                  </h3>
                                  <canvas id="total-expences" />
                                </div>
                              </div>
                              <div className="col-lg-9 col-sm-8 grid-margin  grid-margin-lg-0">
                                <div className="pl-0 pl-lg-4 ">
                                  <div className="d-xl-flex justify-content-between align-items-center mb-2">
                                    <div className="d-lg-flex align-items-center mb-lg-2 mb-xl-0">
                                      <h3 className="text-dark font-weight-bold mr-2 mb-0">
                                        Devices sales
                                      </h3>
                                      <h5 className="mb-0">( growth 62% )</h5>
                                    </div>
                                    <div className="d-lg-flex">
                                      <p className="mr-2 mb-0">Timezone:</p>
                                      <p className="text-dark font-weight-bold mb-0">
                                        GMT-0400 Eastern Delight Time
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="graph-custom-legend clearfix"
                                    id="device-sales-legend"
                                  />
                                  <canvas id="device-sales" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 grid-margin stretch-card">
                        <div className="card card-danger-gradient">
                          <div className="card-body mb-4">
                            <h4 className="card-title text-white">
                              Account Retention
                            </h4>
                            <canvas id="account-retension" />
                          </div>
                          <div className="card-body bg-white pt-4">
                            <div className="row pt-4">
                              <div className="col-sm-6">
                                <div className="text-center border-right border-md-0">
                                  <h4>Conversion</h4>
                                  <h1 className="text-dark font-weight-bold mb-md-3">
                                    $306
                                  </h1>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="text-center">
                                  <h4>Cancellation</h4>
                                  <h1 className="text-dark font-weight-bold">
                                    $1,520
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8  grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-xl-flex justify-content-between mb-2">
                              <h4 className="card-title">
                                Page views analytics
                              </h4>
                              <div
                                className="graph-custom-legend primary-dot"
                                id="pageViewAnalyticLengend"
                              />
                            </div>
                            <canvas id="page-view-analytic" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 grid-margin grid-margin-lg-0 stretch-card">
                        <div className="card">
                          <div className="card-body recent-activity">
                            <h4 className="card-title">Recent Activity</h4>
                            <div className="d-flex mb-3">
                              <div>
                                <div className="activity-info bg-danger">
                                  {" "}
                                  I{" "}
                                </div>
                              </div>
                              <div className="activity-details">
                                <h4 className="text-dark font-weight-normal">
                                  Iva Barber
                                </h4>
                                <p className="mb-0">added new task on trello</p>
                                <p className="text-small mb-0">05:58AM</p>
                              </div>
                            </div>
                            <div className="d-flex mb-3">
                              <div className="activity-info bg-warning">
                                {" "}
                                D{" "}
                              </div>
                              <div className="activity-details">
                                <h4 className="text-dark font-weight-normal">
                                  Dorothy Romero
                                </h4>
                                <p className="mb-0">added new task on trello</p>
                                <p className="text-small mb-0">02:50PM</p>
                              </div>
                            </div>
                            <div className="d-flex mb-3">
                              <div className="activity-info bg-success">
                                {" "}
                                R{" "}
                              </div>
                              <div className="activity-details">
                                <h4 className="text-dark font-weight-normal">
                                  Ricardo Hawkins
                                </h4>
                                <p className="mb-0">added new task on trello</p>
                                <p className="text-small mb-0">05:22AM</p>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="activity-info hide-border bg-info">
                                {" "}
                                N{" "}
                              </div>
                              <div className="activity-details">
                                <h4 className="text-dark font-weight-normal">
                                  Noah Montgomery
                                </h4>
                                <p className="mb-0">added new task on trello</p>
                                <p className="text-small mb-0">08:19PM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 grid-margin grid-margin-lg-0 stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">My Balance</h4>
                            <div className="d-lg-flex justify-content-between align-items-center">
                              <h1 className="text-dark mb-0">$3258</h1>
                              <p className="text-success mb-0 font-weight-medium">
                                +30.56% ($121)
                              </p>
                            </div>
                            <p className="mb-5 pb-1">
                              Deposit:{" "}
                              <span className="font-weight-bold">$5430</span>
                            </p>
                            <canvas id="my-balance" />
                            <div className="border p-3 mt-2">
                              <div className="row">
                                <div className="col-sm-6 mb-4 mb-lg-0">
                                  <div className="d-lg-flex justify-content-between align-items-center">
                                    <div className="text-small text-dark">
                                      Available :
                                    </div>
                                    <span className="font-weight-bold text-dark text-small ">
                                      30.56%
                                    </span>
                                  </div>
                                  <div className="progress progress-sm mt-1">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "30%" }}
                                      aria-valuenow={30}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="d-lg-flex justify-content-between align-items-center">
                                    <div className="text-small text-dark">
                                      Pending :
                                    </div>
                                    <span className="font-weight-bold text-small text-dark">
                                      69.44%
                                    </span>
                                  </div>
                                  <div className="progress progress-sm mt-1">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "70%" }}
                                      aria-valuenow={70}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 grid-margin grid-margin-lg-0 stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <div className="dotted-border p-3 mb-3">
                              <div className="row">
                                <div className="col-sm-12">
                                  <h4 className="card-title mb-1">
                                    Sales Prediction
                                  </h4>
                                </div>
                                <div className="col-sm-6">
                                  <canvas id="prediction-1" />
                                  <h3 className="font-weight-bold mt-3 text-dark">
                                    $3258
                                  </h3>
                                  <p className="text-muted mb-0">
                                    350-985 sales
                                  </p>
                                </div>
                                <div className="col-sm-6">
                                  <canvas id="prediction-2" />
                                  <h3 className="font-weight-bold mt-3 text-dark">
                                    $3258
                                  </h3>
                                  <p className="text-muted mb-0">
                                    350-985 sales
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="dotted-border p-3">
                              <div className="row">
                                <div className="col-sm-12">
                                  <h4 className="card-title mt-4 mb-1">
                                    Stock History
                                  </h4>
                                </div>
                                <div className="col-sm-6">
                                  <canvas id="prediction-3" />
                                  <h3 className="font-weight-bold mt-3 text-dark">
                                    $3258
                                  </h3>
                                  <p className="mb-0 text-muted">
                                    350-985 sales
                                  </p>
                                </div>
                                <div className="col-sm-6">
                                  <canvas id="prediction-4" />
                                  <h3 className="font-weight-bold text-dark  mt-3">
                                    $3258
                                  </h3>
                                  <p className="mb-0 text-muted">
                                    350-985 sales
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
          {/* partial:partials/_footer.html */}
          <footer className="footer">
            <div className="footer-inner-wraper">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                  Copyright © 2018{" "}
                  <a href="https://www.bootstrapdash.com/" target="_blank">
                    Bootstrap Dash
                  </a>
                  . All rights reserved.
                </span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                  Hand-crafted &amp; made with{" "}
                  <i className="mdi mdi-heart text-danger" />
                </span>
              </div>
            </div>
          </footer>
          {/* partial */}
        </div>
        {/* main-panel ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
}
export default Ejemplo;
