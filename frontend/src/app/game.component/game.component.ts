import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Game, Piece} from '../objects/game.data';
import { SecondaryAreaComponent } from '../secondary-area.component/secondary-area.component';
import {PieceComponent} from '../piece.component/piece.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, SecondaryAreaComponent, PieceComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {

  @Input()
  game!: Game;

  @Output()
  closeRequest = new EventEmitter<void>();

  pieceDescription: Piece | null = null;

  descriptionTooltipProperties: Map<string, string> = new Map();

  selectedPieceId: number | null = null;

  selectPiece(event: MouseEvent, piece: Piece): void {
    event.stopPropagation();
    if (this.selectedPieceId === piece.id) {
      this.selectedPieceId = null;
    } else {
      this.selectedPieceId = piece.id;
    }
  }

  isSelected(piece: Piece): boolean {
    return this.selectedPieceId != null && String(this.selectedPieceId) === String(piece.id);
  }

  onCellClick(event: MouseEvent, x: number, y: number): void {
    event.stopPropagation();
    const piece = this.piecesAt(x, y);
    if (piece && piece.length) {
      return;
    }
    if (this.selectedPieceId != null) {
      const selectedPiece: Piece = this.game.pieces.find(p => p.id === this.selectedPieceId)!
      selectedPiece.position.x = x;
      selectedPiece.position.y = y;
    }
  }

  rows(n: number | undefined): number[] {
    const len = Math.max(0, n ?? 0);
    return Array.from({ length: len }, (_, i) => i);
  }

  cols(n: number | undefined): number[] {
    const len = Math.max(0, n ?? 0);
    return Array.from({ length: len }, (_, i) => i);
  }

  piecesAt(x: number, y: number): any[] {
    if (!this.game?.pieces) return [];
    return this.game.pieces.filter(p => {
      return p.position.x === x && p.position.y === y;
    });
  }

  // emit closeRequest when Escape is pressed
  @HostListener('window:keydown', ['$event'])
  onWindowKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeRequest.emit();
    }
  }


  protected showDescription(showDescription: boolean, piece: Piece) {
    if (showDescription) {
      this.pieceDescription = piece;
    } else {
      this.pieceDescription = null;
    }
  }
}
