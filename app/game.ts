import { Participant } from './participant';
import { Prediction } from './prediction';

export class Game {
  scheduled: string;
  home: Participant;
  away: Participant;
  prediction: Prediction;
}
