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
      <p>We are not responsible for any gambling losses.</p>
      <p>&copy; 2016 Corey Beres</p>
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
