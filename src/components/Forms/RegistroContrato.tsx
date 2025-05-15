import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import { Button } from "react-bootstrap";
import PasoCliente from "../Forms/Contrato";
import Contrato from "../Forms/Dirrecion";

function RegistroContrato() {
  const [stepWizardInstance, setStepWizardInstance] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (stats) => setCurrentStep(stats.activeStep);

  const stepTitles = ["Direccion", "Toma de agua", "Contrato", "Documentos"];

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">Nuevo Contrato</h3>
        </div>

        <div className="card">
          <div className="card-body">
            {/* Títulos de pasos */}
            <ul className="nav nav-pills mb-4 justify-content-center">
              {stepTitles.map((title, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={`nav-link ${
                      currentStep === index + 1 ? "active" : ""
                    }`}
                    onClick={() => stepWizardInstance.goToStep(index + 1)}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>

            {/* Wizard */}
            <StepWizard
              instance={setStepWizardInstance}
              onStepChange={handleStepChange}
            >
              <Contrato/>
            </StepWizard>

            {/* Botones de navegación */}
            <div className="d-flex justify-content-between mt-4">
              <Button
                variant="secondary"
                onClick={() => stepWizardInstance.previousStep()}
                disabled={currentStep === 1}
              >
                Anterior
              </Button>
              <Button
                variant="primary"
                onClick={() => stepWizardInstance.nextStep()}
                disabled={currentStep === stepTitles.length}
              >
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroContrato;
