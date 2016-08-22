import { Component, Input } from '@angular/core';

import { FacebookShareComponent } from './facebook-share.component';
import { Game } from './game';

@Component({
  selector: 'game-detail',
  templateUrl: 'app/game-detail.component.html',
  styleUrls: ['app/game-detail.component.css'],
  directives: [FacebookShareComponent],
})
export class GameDetailComponent {
  @Input() game: Game;
}
