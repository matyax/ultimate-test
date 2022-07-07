import { IntentInterface } from "services/intents";
import "./Intent.css";

const Intent = ({ intent }: { intent: IntentInterface }) => {
  return (
    <div className="intent">
      <h3 className="intent__title">{intent.name}</h3>
      <p>{intent.description}</p>
    </div>
  );
};

export default Intent;
