import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[utrecht-form-label]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  inputs: ['disabled', 'checked', 'type'],
  host: {
    '[class.utrecht-form-label]': 'true',
    '[class.utrecht-form-label--checkbox]': 'type === "checkbox"',
    '[class.utrecht-form-label--checked]': 'checked',
    '[class.utrecht-form-label--disabled]': 'disabled',
    '[class.utrecht-form-label--radio]': 'type === "radio"',
  },
})
export class UtrechtFormLabelAttr {
  @Input() checked = false;
  @Input() disabled = false;
  @Input() name = '';
  @Input() type = '';
  constructor() {}
}
