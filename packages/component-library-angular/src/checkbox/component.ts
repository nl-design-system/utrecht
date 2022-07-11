import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  // Case-insensitive variant `input[type="checkbox" i]` does not appear to work in Angular
  selector: 'input[type="checkbox"][utrecht-checkbox]',
  template: '',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[attr.aria-invalid]': 'invalid || undefined',
    '[attr.aria-required]': 'required || undefined',
    '[attr.disabled]': 'disabled ? "disabled": null',
    '[attr.required]': 'required ? "required": null',
    '[class.utrecht-checkbox--disabled]': 'disabled',
    '[class.utrecht-checkbox--html-input]': 'true',
    '[class.utrecht-checkbox--invalid]': 'invalid',
    '[class.utrecht-checkbox--required]': 'required',
    '[class.utrecht-checkbox--checked]': 'checked',
    '[class.utrecht-checkbox]': 'true',
  },
})
export class UtrechtCheckboxAttr {
  @Input() disabled = false;
  @Input() invalid = false;
  @Input() required = false;
  @Input() checked = false;
  @Input() type?: string;
  constructor() {}
}
