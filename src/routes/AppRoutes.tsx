import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profiles from "../pages/Profiles";
import Client from "../pages/Client";

function AppRoutes() {
  console.log("AppRoutes renderizado"); // Para verificar si se renderiza
  return (
    <Router>
      <Routes>
        <Route path="/1" element={<h1>Inicio</h1>} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
