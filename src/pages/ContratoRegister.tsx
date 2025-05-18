import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import { Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import MenuIzquierdo from "../components/Sidebar";
import Footer from "../components/Footer";

import Contrato from "../components/Forms/ContratoForms/index";
import Direccion from "../components/Forms/DireccionForms/index";
import Documento from "../components/Forms/DocumentoForms/index";
import TomaAgua from "../components/Forms/TomaAguaForms/index";


function ContratoRegister() {
  const [stepWizardInstance, setStepWizardInstance] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (stats) => setCurrentStep(stats.activeStep);

  const stepTitles = ["Direccion", "Toma de agua", "Contrato", "Documentos"];
  return (
    <div className="container-scroller">
      {/* partial:../../partials/_navbar.html */}
      <br></br>
      <NavBar />
      <br></br>
      {/* partial */}
      <div className="container-fluid page-body-wrapper">
        {/* partial:../../partials/_settings-panel.html */}

        {/* partial */}
        {/* partial:../../partials/_sidebar.html */}
        <MenuIzquierdo />
        {/* partial */}
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title"> Nuevo Contrato </h3>
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
                  <Direccion />
                  <TomaAgua />
                  <Contrato />
                  <Documento />
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

export default ContratoRegister;
