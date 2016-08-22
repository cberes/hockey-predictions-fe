import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Game } from './game';
import { GameDetailComponent } from './game-detail.component';
import { GameService } from './game.service';

@Component({
  selector: 'single-game',
  templateUrl: 'app/games-list.component.html',
  styleUrls: ['app/games-list.component.css'],
  directives: [GameDetailComponent],
})
export class SingleGameComponent implements OnInit {
  id: number;
  title: string;
  games: Game[];

  constructor(private gameService: GameService,
              private routeParams: RouteParams) { }

  ngOnInit() {
    this.id = +this.routeParams.get('id');
    this.gameService.getGame(this.id).then(games => this.games = games);
    this.title = 'Game #' + this.id;
  }
}

