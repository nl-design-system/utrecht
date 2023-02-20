import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[utrecht-fieldset]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[attr.name]': 'name',
    '[attr.form]': 'form',
    '[attr.role]': 'role',
    '[attr.aria-invalid]': 'invalid || undefined',
    '[attr.aria-describedby]': 'ariaDescribedby',
    '[attr.aria-labelledby]': 'ariaLabelledBy',
    '[attr.aria-label]': 'ariaLabel',
    '[class.utrecht-fieldset]': 'true',
    '[class.utrecht-form-fieldset--html-fieldset]': 'true',
    '[class.utrecht-form-fieldset--disabled]': 'disabled || null',
    '[class.utrecht-form-fieldset--invalid]': 'invalid || null',
  },
})
export class UtrechtFieldsetAttr {
  @Input() disabled?: boolean = false;
  @Input() invalid?: boolean = false;
  @Input() ariaDescribedby?: string = '';
  @Input() ariaLabel?: string = '';
  @Input() ariaLabelledBy?: string = '';
  @Input() form?: string = '';
  @Input() name?: string = '';
  @Input() role?: string = '';
  constructor() {}
}
