import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  title: string;
  games: Game[];

  constructor(private gameService: GameService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.title = 'Game #' + id;
      this.gameService.getGame(id).then(games => this.games = games);
    });
  }
}

