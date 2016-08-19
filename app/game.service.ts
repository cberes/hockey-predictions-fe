import { Inject, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { APP_CONFIG, AppConfig } from './app.config';
import { Game } from './game';

@Injectable()
export class GameService {
  private recentUrl = 'games/recent';
  private upcomingUrl = 'games/upcoming';

  constructor(private http: Http,
              @Inject(APP_CONFIG) private config: AppConfig) {}

  getRecentGames(): Promise<Game[]> {
    return this.getGames(this.recentUrl);
  }

  getUpcomingGames(): Promise<Game[]> {
    return this.getGames(this.upcomingUrl);
  }

  private getGames(endpoint: string): Promise<Game[]> {
    let url = `//${this.config.apiEndpoint}/${endpoint}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().games)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
