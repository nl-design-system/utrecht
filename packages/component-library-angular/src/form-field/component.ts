import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'utrecht-form-field',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtFormField {
  @Input() invalid?: boolean = false;
  @Input() type?: 'checkbox' | 'radio' | 'text';
  @Input() class?: string;
  constructor() {}
}
