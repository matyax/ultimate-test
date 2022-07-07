import intents from "config/intents.json";

interface ExpressionInterface {
  id: string;
  text: string;
}

interface TrainingDataInterface {
  expressionCount: number;
  expressions: ExpressionInterface[];
}

interface ReplyInterface {
  id: string;
  text: string;
}

export interface IntentInterface {
  id: string;
  name: string;
  description: string;
  trainingData: TrainingDataInterface;
  reply: ReplyInterface;
}

export function getIntents(): IntentInterface[] {
  return intents;
}
