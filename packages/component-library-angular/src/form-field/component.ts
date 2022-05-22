import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'utrecht-form-field',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtFormField {
  constructor() {}
}
