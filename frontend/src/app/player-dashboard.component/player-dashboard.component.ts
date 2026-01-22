import {Component, Input} from '@angular/core';
import {Player} from '../objects/game.data';

@Component({
  selector: 'app-player-dashboard',
  imports: [],
  templateUrl: './player-dashboard.component.html',
  styleUrl: './player-dashboard.component.css',
})
export class PlayerDashboardComponent {

  @Input()
  player!: Player;
}
