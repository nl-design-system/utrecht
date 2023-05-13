import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'utrecht-color-sample',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtColorSample {
  @Input() color: string = '';
  constructor() {}
}
