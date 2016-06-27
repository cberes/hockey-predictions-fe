import { Component, OnInit } from '@angular/core';

import { Game } from './game';
import { GameDetailComponent } from './game-detail.component';
import { GameService } from './game.service';

@Component({
  selector: 'recent-games',
  templateUrl: 'app/recent-games.component.html',
  styleUrls: ['app/recent-games.component.css'],
  directives: [GameDetailComponent],
})
export class RecentGamesComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getRecentGames().then(games => this.games = games);
  }
}

