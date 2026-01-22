import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Piece } from '../objects/game.data';

@Component({
  selector: 'app-piece',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
})
export class PieceComponent implements OnDestroy {
  @Input()
  piece!: Piece;

  @Output()
  description = new EventEmitter<boolean>();

  private hoverTimer: any = null;
  private hoverDelay = 1000;

  onImageEnter(): void {
    console.log('entered')
    if (this.hoverTimer) clearTimeout(this.hoverTimer);
    this.hoverTimer = setTimeout(() => {
      this.description.emit(true)
      this.hoverTimer = null;
    }, this.hoverDelay);
  }

  onImageLeave(): void {
    this.description.emit(false);
    if (this.hoverTimer) {
      clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    }
  }

  ngOnDestroy(): void {
    if (this.hoverTimer) {
      clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    }
  }
}
