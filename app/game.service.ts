import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { GamesList } from './games-list';

@Injectable()
export class GameService {
  private recentUrl = '/games/recent';
  private upcomingUrl = '/games/upcoming';

  constructor(private http: Http) {}

  getRecentGames(): Promise<GamesList> {
    return this.getGames(this.recentUrl);
  }

  getUpcomingGames(): Promise<GamesList> {
    return this.getGames(this.upcomingUrl);
  }

  private getGames(url: string): Promise<GamesList> {
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
