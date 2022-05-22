import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'utrecht-document',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtDocument {
  constructor() {}
}
