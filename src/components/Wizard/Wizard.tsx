import { useState } from "react";
import { Button } from "react-bootstrap";
import Steps from "components/Steps";
import Welcome from "components/Wizard/Welcome";
import Intents from "components/Wizard/Intents";
import Confirmation from "components/Wizard/Confirmation";
import Thanks from "components/Wizard/Thanks";
import { IntentInterface } from "services/intents";
import "./Wizard.css";

const Wizard = () => {
  const [step, setStep] = useState(1);
  const [selectedIntents, setSelectedIntents] = useState<IntentInterface[]>([]);

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleIntentChange = (intents: IntentInterface[]) => {
    setSelectedIntents(intents);
  };

  if (step >= 5) {
    return null;
  }

  return (
    <div className="wizard">
      <div className="wizard__header">
        <Steps current={step} total={4} />
      </div>
      <div className="wizard__body">
        {step === 1 && <Welcome />}
        {step === 2 && (
          <Intents selected={selectedIntents} onChange={handleIntentChange} />
        )}
        {step === 3 && <Confirmation intents={selectedIntents} />}
        {step === 4 && <Thanks />}
      </div>
      <div className="wizard__footer">
        {step < 4 && (
          <Button variant="primary" onClick={nextStep}>
            Next
          </Button>
        )}
        {step === 4 && (
          <Button variant="primary" onClick={nextStep}>
            Finish
          </Button>
        )}
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
