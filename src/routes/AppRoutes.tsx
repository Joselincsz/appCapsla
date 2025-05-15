import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profiles from "../pages/Profiles";
import Client from "../pages/Client";
import Dirrecion from "../pages/Direccion";
import RegistroContrato from "../components/Forms/RegistroContrato";
import Ejemplo from "../pages/Ejemplo";
import Autenticacion from "../pages/AuthViews/Autenticacion";
import RegistrarUsuario from "../pages/RegisterViews/RegistrarUsuario";
import CambiarContrasennia from "../pages/ResetPasswordViews/CambiarContrasennia";
import RecuperacionContrasennia from "../pages/ResetPasswordViews/RecuperacionContrasennia";

function AppRoutes() {
  console.log("AppRoutes renderizado"); // Para verificar si se renderiza
  return (
    <Router>
      <Routes>
        <Route path="/1" element={<h1>Inicio</h1>} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/client" element={<Client />} />
        <Route path="/direccion" element={<Dirrecion />} />
        <Route path="/registroContrato" element={<RegistroContrato />} />
        <Route path="/ejemplo" element={<Ejemplo />} />
        <Route path="/autenticacion" element={<Autenticacion />} />
        <Route path="/registrarUsuario" element={<RegistrarUsuario />} />
        <Route path="/cambiarContrasennia" element={<CambiarContrasennia />} />
        <Route path="/recuperacionContrasennia" element={<RecuperacionContrasennia />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
