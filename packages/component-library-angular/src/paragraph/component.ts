import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: '[utrecht-paragraph]',
  templateUrl: 'index.html',
  styleUrls: ['index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.utrecht-paragraph]': 'true',
    '[class.utrecht-paragraph--lead]': 'lead',
    '[class.utrecht-paragraph--small]': 'small',
  },
})
export class UtrechtParagraph implements OnInit {
  contentWrapper: TemplateRef<any> | null = null;

  @ViewChild('leadWrapper', { static: true }) leadWrapper: TemplateRef<any> | null = null;
  @ViewChild('smallWrapper', { static: true }) smallWrapper: TemplateRef<any> | null = null;

  @Input() lead?: boolean;
  @Input() small?: boolean;
  constructor() {}

  ngOnInit() {
    this.contentWrapper = this.lead ? this.leadWrapper : this.small ? this.smallWrapper : null;
  }
}
