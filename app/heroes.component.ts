import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  addingHero = false;
  error: any;

  constructor(
    private _router: Router,
    private _heroService: HeroService
  ) { }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  delete(hero: Hero, event: any) {
    // TODO: Display error message
    event.stopPropagation();
    this._heroService.delete(hero)
        .then(response => {
          this.heroes = this.heroes.filter(h => h != hero);
	  if (this.selectedHero === hero) {
            this.selectedHero = null;
          }
	})
	.catch(error => this.error = error);
  }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    let link = ['HeroDetail', { id: this.selectedHero.id }];
    this._router.navigate(link);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }
}
