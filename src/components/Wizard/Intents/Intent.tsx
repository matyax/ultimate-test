import { IntentInterface } from "services/intents";
import "./Intent.css";

interface Props {
  intent: IntentInterface;
  onClick: (intent: IntentInterface) => void;
  selected: boolean;
}

const Intent = ({ intent, onClick, selected }: Props) => {
  return (
    <div
      className={`intent ${selected ? "intent--selected" : ""}`}
      onClick={() => onClick(intent)}
    >
      <h3 className="intent__title">{intent.name}</h3>
      <p>{intent.description}</p>
    </div>
  );
};

export default Intent;
