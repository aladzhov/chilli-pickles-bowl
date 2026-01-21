import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from '../objects/game.data';

@Injectable({
  providedIn: 'root',
})
export class GameSetupService {
  private http = inject(HttpClient);

  getSetups() {
    return this.http.get<Game[]>('/api/setup/setups');
  }
}
