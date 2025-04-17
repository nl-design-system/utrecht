import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector:
    'button[utrecht-button], input[type="button" i][utrecht-button], input[type="reset" i][utrecht-button], input[type="submit" i]',
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
    '[class.utrecht-button--busy]': 'busy',
    '[class.utrecht-button--disabled]': 'disabled',
    '[class.utrecht-button--html-button]': 'true',
    '[class.utrecht-button--pressed]': 'pressed',
    '[class.utrecht-button--primary-action]': 'appearance === "primary-action-button"',
    '[class.utrecht-button--secondary-action]': 'appearance === "secondary-action-button"',
    '[class.utrecht-button--submit]': 'type === "submit"',
    '[class.utrecht-button--subtle-action]': 'appearance === "subtle-button"',
    '[class.utrecht-button]': 'true',
  },
})
export class UtrechtButtonAttr implements AfterContentInit {
  @Input() busy = false;
  @Input() pressed? = undefined;
  @Input() appearance?: string;
  @ContentChild('[slot=label]', { static: false }) labelSlot?: ElementRef;
  hasLabel = false;
  ngAfterContentInit() {
    this.hasLabel = !!this.labelSlot;
  }
}
