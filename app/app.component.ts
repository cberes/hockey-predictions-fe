import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { APP_CONFIG, HOCKEY_DI_CONFIG } from './app.config';
import { GameService } from './game.service';
import { UpcomingGamesComponent } from './upcoming-games.component';
import { RecentGamesComponent } from './recent-games.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Upcoming']">Upcoming</a>
      <a [routerLink]="['Recent']">Recent</a>
    </nav>
    <router-outlet></router-outlet>
    <div id="footer">
      <p>
        Follow us for news and updates:
        <a href="https://twitter.com/hockeyscor_es">Twitter</a>
        <a href="https://instagram.com/hockeyscor.es">Instagram</a>
      </p>
      <p>
        &copy; 2016 Corey Beres.
        This site is not associated with any sports teams or leagues.
        These predictions are provided for entertainment only.
        We make no guarantees about the outcomes of these games.
        <a href="http://www.responsiblegambling.org/safer-play">Gamble responsibly.</a>
      </p>
    </div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    { provide: APP_CONFIG, useValue: HOCKEY_DI_CONFIG },
    GameService,
  ],
})
@RouteConfig([
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: UpcomingGamesComponent,
    useAsDefault: true
  },
  {
    path: '/recent',
    name: 'Recent',
    component: RecentGamesComponent
  }
])
export class AppComponent {
  title = 'Hockey Predictions';
}
