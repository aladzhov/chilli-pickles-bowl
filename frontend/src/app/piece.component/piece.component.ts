import {Component, Input} from '@angular/core';
import {Piece} from '../objects/game.data';

@Component({
  selector: 'app-piece',
  imports: [],
  templateUrl: './piece.component.html',
  styleUrl: './piece.component.css',
})
export class PieceComponent {

  @Input()
  piece!: Piece;
}
