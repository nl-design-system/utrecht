import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  // Case-insensitive variant `input[type="radio" i]` does not appear to work in Angular
  selector: 'input[type="radio"][utrecht-radio-button]',
  template: '',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[attr.disabled]': 'disabled ? "disabled": null',
    '[attr.type]': 'type || "radio"',
    '[class.utrecht-radio-button--disabled]': 'disabled',
    '[class.utrecht-radio-button--html-input]': 'true',
    '[class.utrecht-radio-button--checked]': 'checked',
    '[class.utrecht-radio-button]': 'true',
  },
})
export class UtrechtRadioButtonAttr {
  @Input() disabled = false;
  @Input() checked = false;
  @Input() type: string = null;
  constructor() {}
}
