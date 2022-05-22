import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'input[utrecht-textbox]',
  template: '',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  inputs: ['inputmode', 'type'],
  host: {
    '[attr.aria-invalid]': 'invalid || undefined',
    '[attr.inputMode]': "inputMode || (type === 'number' ? 'numeric' : undefined)",
    '[attr.name]': 'name || null',
    '[attr.readonly]': 'readonly || null',
    '[class.utrecht-textbox--disabled]': 'disabled',
    '[class.utrecht-textbox--html-input]': 'true',
    '[class.utrecht-textbox--invalid]': 'invalid',
    '[class.utrecht-textbox--numeric]': 'type === "number" || inputMode === "numeric"',
    '[class.utrecht-textbox--password]': 'type === "password"',
    '[class.utrecht-textbox--readonly]': 'readonly',
    '[class.utrecht-textbox--required]': 'required',
    '[class.utrecht-textbox--url]': 'type === "email" || type === "url"',
    '[class.utrecht-textbox]': 'true',
    '[attr.disabled]': 'disabled ? "disabled": null',
    '[attr.required]': 'required ? "required": null',
  },
})
export class UtrechtTextboxAttr {
  @Input() disabled = false;
  @Input() invalid = false;
  @Input() required = false;
  @Input() readonly = false;
  constructor() {}
}
