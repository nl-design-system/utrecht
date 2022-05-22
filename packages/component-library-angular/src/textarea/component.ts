import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'textarea[utrecht-textarea]',
  template: '',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[attr.aria-invalid]': 'invalid || undefined',
    '[attr.name]': 'name || null',
    '[attr.readonly]': 'readonly || null',
    '[class.utrecht-textarea--disabled]': 'disabled',
    '[class.utrecht-textarea--html-input]': 'true',
    '[class.utrecht-textarea--invalid]': 'invalid',
    '[class.utrecht-textarea--readonly]': 'readonly',
    '[class.utrecht-textarea--required]': 'required',
    '[class.utrecht-textarea--url]': 'type === "email" || type === "url"',
    '[class.utrecht-textarea]': 'true',
    '[attr.disabled]': 'disabled ? "disabled": null',
    '[attr.required]': 'required ? "required": null',
  },
})
export class UtrechtTextareaAttr {
  @Input() disabled = false;
  @Input() invalid = false;
  @Input() required = false;
  @Input() readonly = false;
  constructor() {}
}
