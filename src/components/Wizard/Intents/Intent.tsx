import { useState, MouseEvent } from "react";
import { Button } from "react-bootstrap";
import IntentExample from "components/Wizard/Intents/IntentExample";
import { IntentInterface } from "services/intents";
import "./Intent.css";

interface Props {
  intent: IntentInterface;
  onClick: (intent: IntentInterface) => void;
  selected: boolean;
}

const Intent = ({ intent, onClick, selected }: Props) => {
  const [seeMore, setSeeMore] = useState(false);

  const toggleSeeMore = (e: MouseEvent) => {
    e.stopPropagation();
    setSeeMore(!seeMore);
  };

  return (
    <div
      className={`intent ${selected ? "intent--selected" : ""}`}
      onClick={() => onClick(intent)}
    >
      <h3 className="intent__title">{intent.name}</h3>
      <p>{intent.description}</p>
      <p>
        <Button
          className="intent__see-more"
          variant="link"
          size="sm"
          onClick={toggleSeeMore}
        >
          {seeMore ? "Close" : "Show example"}
        </Button>
      </p>
      {seeMore && <IntentExample intent={intent} />}
    </div>
  );
};

export default Intent;
