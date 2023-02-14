import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'utrecht-form-field-description',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtrechtFormFieldDescription {
  @Input() invalid?: boolean = false;
  @Input() valid?: boolean = false;
  @Input() warning?: boolean = false;
  @Input() class?: string;
  constructor() {}
}
