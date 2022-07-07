import IntentExample from "components/Wizard/Intents/IntentExample";
import { IntentInterface } from "services/intents";
import "./Confirmation.css";

interface Props {
  intents: IntentInterface[];
}

const Confirmation = ({ intents }: Props) => {
  return (
    <div className="confirmation">
      <h1 className="wizard__title">Customize your Robot</h1>
      <h2 className="wizard__subtitle">Confirm your selection</h2>
      <p>You selected the following conversation patterns:</p>
      {intents.length === 0 && (
        <div className="confirmation__empty">You didn't select any :(</div>
      )}
      {intents.length > 0 && (
        <div className="confirmation__intents">
          {intents.map((intent) => (
            <>
              <h3 className="intent__title">{intent.name}</h3>
              <IntentExample intent={intent} />
              <hr />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Confirmation;
