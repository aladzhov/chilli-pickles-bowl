import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Game} from '../objects/game.data';
import {PlayerDashboardComponent} from '../player-dashboard.component/player-dashboard.component';
import {DiceComponent} from '../dice.component/dice.component';

@Component({
  selector: 'app-secondary-area',
  standalone: true,
  imports: [CommonModule, PlayerDashboardComponent, DiceComponent],
  templateUrl: './secondary-area.component.html',
  styleUrls: ['./secondary-area.component.css'],
})
export class SecondaryAreaComponent {

  @Input()
  game!: Game;
}
