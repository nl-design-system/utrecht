import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'utrecht-page-content',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtPageContent {
  constructor() {}
}
