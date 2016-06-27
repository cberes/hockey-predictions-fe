import { Component, OnInit } from '@angular/core';

import { Game } from './game';
import { PredictionDetailComponent } from './prediction-detail.component';
import { GameService } from './game.service';

@Component({
  selector: 'upcoming-games',
  templateUrl: 'app/upcoming-games.component.html',
  styleUrls: ['app/upcoming-games.component.css'],
  directives: [PredictionDetailComponent],
})
export class UpcomingGamesComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getUpcomingGames().then(games => this.games = games);
  }
}

