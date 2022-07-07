import { useState } from "react";
import { Button } from "react-bootstrap";
import Steps from "components/Steps";
import Welcome from "components/Wizard/Welcome";
import Intents from "components/Wizard/Intents";
import "./Wizard.css";

const Wizard = () => {
  const [step, setStep] = useState(1);

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="wizard">
      <div className="wizard__header">
        <Steps current={step} total={4} />
      </div>
      <div className="wizard__body">
        {step === 1 && <Welcome />}
        {step === 2 && <Intents />}
      </div>
      <div className="wizard__footer">
        <Button variant="primary" onClick={nextStep}>
          Next
        </Button>
        {step > 1 && (
          <Button variant="secondary" onClick={prevStep}>
            Back
          </Button>
        )}
      </div>
    </div>
  );
};

export default Wizard;
