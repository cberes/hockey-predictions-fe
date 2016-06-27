import { Component, Input } from '@angular/core';

import { Game } from './game';

@Component({
  selector: 'game-detail',
  templateUrl: 'app/game-detail.component.html',
  styleUrls: ['app/game-detail.component.css'],
})
export class GameDetailComponent {
  @Input() game: Game;
}
