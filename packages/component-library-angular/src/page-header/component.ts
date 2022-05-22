import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'utrecht-page-header',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtPageHeader {
  constructor() {}
}
