import { Component, OnInit } from '@angular/core';

import { Game } from './game';
import { GameDetailComponent } from './game-detail.component';
import { GameService } from './game.service';

@Component({
  selector: 'upcoming-games',
  templateUrl: 'app/upcoming-games.component.html',
  styleUrls: ['app/upcoming-games.component.css'],
  directives: [GameDetailComponent],
})
export class UpcomingGamesComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getUpcomingGames().then(games => this.games = games);
  }
}

