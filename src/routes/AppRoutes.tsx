import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profiles from "../pages/Profiles";
import Client from "../pages/Client";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
