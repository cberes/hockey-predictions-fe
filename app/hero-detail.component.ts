import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import {Hero} from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }

  goBack(savedHero: Hero = null) {
    // TODO: can leave the app
    this.close.emit(savedHero);
    if (this.navigated) {
      window.history.back();
    }
  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.heroService.getHero(id).then(hero => this.hero = hero);
    } else {
      this.navigated = false;
      this.hero = new Hero();
    }
  }

  save() {
    // TODO: display error message
    this.heroService.save(this.hero)
        .then(hero => {
          this.hero = hero;
	  this.goBack(hero);
	})
	.catch(error => this.error = error);
  }
}
