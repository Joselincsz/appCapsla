import React, { useState } from "react";

interface DireccionData {
  colonia: string;
  calle: string;
  numero_exterior: string;
  numero_interior: string;
  referencias: string;
}

interface DireccionModalProps {
  onCerrar: () => void;
  onGuardar: (datos: DireccionData) => void;
  direccionInicial?: DireccionData;
}

const DireccionModal: React.FC<DireccionModalProps> = ({
  onCerrar,
  onGuardar,
  direccionInicial,
}) => {
  const [datos, setDatos] = useState<DireccionData>(
    direccionInicial || {
      colonia: "",
      calle: "",
      numero_exterior: "",
      numero_interior: "",
      referencias: "",
    }
  );

  const handleChange = (campo: keyof DireccionData, valor: string) => {
    setDatos((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGuardar(datos);
  };

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1050,
        overflowY: "auto", // permite desplazamiento
      }}
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div
          className="modal-content"
          style={{
            maxHeight: "100vh",
            overflowY: "auto",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Editar Dirección</h5>
              <button type="button" className="btn-close" onClick={onCerrar} />
            </div>
            <div className="modal-body">
              {[
                { campo: "colonia", label: "Colonia" },
                { campo: "calle", label: "Calle" },
                { campo: "numero_exterior", label: "Número Exterior" },
                { campo: "numero_interior", label: "Número Interior" },
                { campo: "referencias", label: "Referencias" },
              ].map(({ campo, label }) => (
                <div key={campo} className="mb-3">
                  <label className="form-label">{label}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={(datos as any)[campo]}
                    onChange={(e) =>
                      handleChange(campo as keyof DireccionData, e.target.value)
                    }
                    placeholder={label}
                  />
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Guardar Cambios
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCerrar}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DireccionModal;
