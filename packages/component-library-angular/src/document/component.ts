import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[utrecht-document]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.utrecht-document]': 'true',
  },
})
export class UtrechtDocument {
  constructor() {}
}
