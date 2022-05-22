import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'utrecht-paragraph',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtParagraph {
  constructor() {}
}
