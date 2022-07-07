import { useState } from "react";
import Steps from "components/Steps";
import Welcome from "components/Wizard/Welcome";
import "./Wizard.css";

const Wizard = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="wizard">
      <div className="wizard__header">
        <Steps current={step} total={4} />
      </div>
      <div className="wizard__body">{step === 1 && <Welcome />}</div>
    </div>
  );
};

export default Wizard;
