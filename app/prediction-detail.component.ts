import { Component, Input } from '@angular/core';

import { Game } from './game';

@Component({
  selector: 'prediction-detail',
  templateUrl: 'app/prediction-detail.component.html',
  styleUrls: ['app/prediction-detail.component.css'],
})
export class PredictionDetailComponent {
  @Input() game: Game;
}
