import { Component, OnInit } from '@angular/core';

import { Game } from './game';
import { GameDetailComponent } from './game-detail.component';
import { GameService } from './game.service';

@Component({
  selector: 'recent-games',
  templateUrl: 'app/games-list.component.html',
  styleUrls: ['app/games-list.component.css'],
  directives: [GameDetailComponent],
})
export class RecentGamesComponent implements OnInit {
  title = 'Recent Games';
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getRecentGames().then(games => this.games = games);
  }
}

