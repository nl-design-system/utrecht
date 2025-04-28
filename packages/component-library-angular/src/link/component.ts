import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '[utrecht-link]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  inputs: ['rel'],
  host: {
    '[attr.rel]': 'external ? (rel ? rel + " " : "") + "external noopener noreferer" : rel',
    '[class.utrecht-link]': 'true',
    '[class.utrecht-link--html-a]': 'true',
    '[class.utrecht-link--external]': 'external',
  },
})
export class UtrechtLinkAttr {
  @Input() external = false;

  @ContentChild('label', { read: TemplateRef }) labelTemplate?: TemplateRef<any>;
}
