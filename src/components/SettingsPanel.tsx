function SettingPanel() {
  return (
    <div>
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
    </div>
  );
}
export default SettingPanel;
