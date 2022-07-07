import { useState } from "react";
import Intent from "components/Wizard/Intents/Intent";
import { getIntents, IntentInterface } from "services/intents";
import "./Intents.css";

const intents = getIntents();

interface Props {
  selected: IntentInterface[];
  onChange: (intents: IntentInterface[]) => void;
}

const Intents = ({ selected = [], onChange }: Props) => {
  const [selectedIntents, setSelectedIntents] =
    useState<IntentInterface[]>(selected);

  const toggleIntent = (intent: IntentInterface) => {
    const selected = [...selectedIntents];
    if (selected.includes(intent)) {
      selected.splice(selected.indexOf(intent), 1);
    } else {
      selected.push(intent);
    }
    setSelectedIntents(selected);
    onChange(selected);
  };

  return (
    <div>
      <h1 className="wizard__title">Customize your Robot</h1>
      <h2 className="wizard__subtitle">Predefined responses</h2>
      <p>
        These are some common patterns of customer queries and responses that
        can be used to respond in a normal conversation.{" "}
        <a
          href="https://support.ultimate.ai/hc/en-us/articles/4405740079506-What-is-an-intent-"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </p>
      <p>
        Select the ones that are a best fit for the purpose of your
        conversational bot.
      </p>
      <p>Selected: {selectedIntents.length}</p>
      <div className="intents">
        {intents.map((intent) => (
          <Intent
            intent={intent}
            key={intent.id}
            selected={selectedIntents.includes(intent)}
            onClick={toggleIntent}
          />
        ))}
      </div>
    </div>
  );
};

export default Intents;
