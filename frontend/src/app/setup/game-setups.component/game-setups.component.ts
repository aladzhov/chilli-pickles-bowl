import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameSetupService} from '../game-setup.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {Game} from '../../objects/game.data';
import {GameComponent} from '../../game.component/game.component';

@Component({
  selector: 'app-game-setups',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './game-setups.component.html',
  styleUrls: ['./game-setups.component.css'],
})
export class GameSetupsComponent {
  private gameSetupService = inject(GameSetupService);

  setups = toSignal(this.gameSetupService.getSetups(), { initialValue: [] });

  // selected game + view mode controls
  selectedGame: Game | null = null;

  openInDialog(setup: any): void {
    this.selectedGame = setup as Game;
  }

  close(): void {
    this.selectedGame = null;
  }
}
