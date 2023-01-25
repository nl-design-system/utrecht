import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: '[utrecht-paragraph]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.utrecht-paragraph]': 'true',
    '[class.utrecht-paragraph--lead]': 'lead',
  },
})
export class UtrechtParagraph {
  @Input() lead?: boolean;
  constructor() {}
}
