import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'utrecht-button-group',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtButtonGroup {
  constructor() {}
}
