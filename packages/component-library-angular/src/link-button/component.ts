import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector:
    'button[utrecht-link-button], input[type="button" i][utrecht-link-button], input[type="reset" i][utrecht-link-button], input[type="submit" i]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  inputs: ['disabled', 'type'],
  host: {
    '[attr.aria-busy]': 'busy ? "true": null',
    '[attr.aria-invalid]': 'invalid || undefined',
    '[attr.aria-pressed]': 'pressed',
    '[attr.disabled]': 'disabled ? "disabled": null',
    '[attr.required]': 'required ? "required": null',
    '[attr.type]': 'type || "button"',
    '[class.utrecht-link-button--busy]': 'busy',
    '[class.utrecht-link-button--disabled]': 'disabled',
    '[class.utrecht-link-button--html-button]': 'true',
    '[class.utrecht-link-button--pressed]': 'pressed',
    '[class.utrecht-link-button--primary-action]': 'appearance === "primary-action-button"',
    '[class.utrecht-link-button--secondary-action]': 'appearance === "secondary-action-button"',
    '[class.utrecht-link-button--submit]': 'type === "submit"',
    '[class.utrecht-link-button--subtle-action]': 'appearance === "subtle-button"',
    '[class.utrecht-link-button]': 'true',
  },
})
export class UtrechtLinkButtonAttr {
  @Input() busy = false;
  @Input() pressed? = undefined;
  @Input() appearance?: string;
  @ContentChild('[slot=label]', { static: false }) labelSlot?: ElementRef;
}
