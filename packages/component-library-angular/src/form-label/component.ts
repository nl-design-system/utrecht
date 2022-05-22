import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[utrecht-form-label]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  constructor() {}
}
