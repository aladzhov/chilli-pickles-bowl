import {Component, inject} from '@angular/core';
import {GameSetupService} from '../game-setup.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-game-setups',
  imports: [],
  templateUrl: './game-setups.component.html',
  styleUrl: './game-setups.component.css',
})
export class GameSetupsComponent {
  private gameSetupService = inject(GameSetupService);

  setups = toSignal(this.gameSetupService.getSetups(), { initialValue: [] });
}
