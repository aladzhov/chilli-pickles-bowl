import {Component, Input} from '@angular/core';
import {Die} from '../objects/game.data';

@Component({
  selector: 'app-dice',
  imports: [],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css',
})
export class DiceComponent {

  @Input()
  dice!: Die[];
}
