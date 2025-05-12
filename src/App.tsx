import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Client";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Usuarios />} />
        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
