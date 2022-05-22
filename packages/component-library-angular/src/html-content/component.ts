import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'utrecht-html-content',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtHtmlContent {
  constructor() {}
}
