import { IntentInterface } from "services/intents";
import "./IntentExample.css";

const IntentExample = ({ intent }: { intent: IntentInterface }) => {
  const expressions = intent.trainingData.expressions.map(
    (expression) => expression.text
  );

  const randomExpression =
    expressions[Math.floor(Math.random() * expressions.length)];

  return (
    <div className="intent-example">
      <p>
        <strong>Customer</strong>: {randomExpression}.
      </p>
      <p>
        <strong>Bot</strong>: {intent.reply.text}.
      </p>
    </div>
  );
};

export default IntentExample;
