import { RouterConfig, provideRouter } from '@angular/router';

import { UpcomingGamesComponent } from './upcoming-games.component';
import { RecentGamesComponent } from './recent-games.component';
import { SingleGameComponent } from './single-game.component';

export const appRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/upcoming',
    pathMatch: 'full'
  },
  {
    path: 'upcoming',
    component: UpcomingGamesComponent
  },
  {
    path: 'recent',
    component: RecentGamesComponent
  },
  {
    path: 'game/:id',
    component: SingleGameComponent
  }
];

export const APP_ROUTER_PROVIDERS = [provideRouter(appRoutes)];
