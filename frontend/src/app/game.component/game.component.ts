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

  // description properties for template
  descriptionTooltipProperties: { key: string; value: any }[] = [];

  // tooltip fixed position (px)
  tooltipLeft: number | null = null;
  tooltipBottom: number | null = null;

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

  // show or hide the tooltip for a given piece
  protected showDescription(showDescription: boolean, piece: Piece) {
    if (showDescription && piece.description && piece.description.properties && piece.description.properties.size > 0) {
      this.setTooltipForPiece(piece);
    } else {
      this.clearTooltip();
    }
  }

  private setTooltipForPiece(piece: Piece): void {
    const host = document.querySelector(`app-piece[data-piece-id="${piece.id}"]`) as HTMLElement | null;

    if (host) {
      const rect = host.getBoundingClientRect();
      this.tooltipLeft = Math.round(rect.right);
      this.tooltipBottom = Math.round(window.innerHeight - rect.top);
    } else {
      this.tooltipLeft = Math.round(window.innerWidth / 2);
      this.tooltipBottom = Math.round(window.innerHeight / 2);
    }

    this.pieceDescription = piece;
    this.descriptionTooltipProperties = this.extractProps(piece);
  }

  private clearTooltip(): void {
    this.pieceDescription = null;
    this.descriptionTooltipProperties = [];
    this.tooltipLeft = null;
    this.tooltipBottom = null;
  }

  private extractProps(piece: Piece): { key: string; value: any }[] {
    const map = piece?.description?.properties;
    if (!map) return [];
    if (typeof (map as any).entries === 'function') {
      return Array.from((map as any).entries()).map(([k, v]: any) => ({ key: String(k), value: v }));
    }
    return Object.keys(map).map(k => ({ key: k, value: (map as any)[k] }));
  }
}
