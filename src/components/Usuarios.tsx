import { useEffect, useState } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
