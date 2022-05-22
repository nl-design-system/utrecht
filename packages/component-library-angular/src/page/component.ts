import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'utrecht-page',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtPage {
  constructor() {}
}
