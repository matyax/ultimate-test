import Intent from "components/Wizard/Intents/Intent";
import { getIntents } from "services/intents";
import "./Intents.css";

const intents = getIntents();

const Intents = () => {
  return (
    <div>
      <h1 className="wizard__title">Customize your Robot</h1>
      <h2 className="wizard__subtitle">Predefined responses</h2>
      <p>
        These are some patterns of customer queries and responses that can be
        used to prove answer for a usual conversation.{" "}
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
      <div className="intents">
        {intents.map((intent) => (
          <Intent intent={intent} key={intent.id} />
        ))}
      </div>
    </div>
  );
};

export default Intents;
