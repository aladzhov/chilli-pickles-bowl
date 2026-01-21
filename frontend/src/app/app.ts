import { Component, signal } from '@angular/core';
import {GameSetupsComponent} from './setup/game-setups.component/game-setups.component';
import {KeepAlive} from './keep-alive/keep-alive';

@Component({
  selector: 'app-root',
  imports: [GameSetupsComponent, KeepAlive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
